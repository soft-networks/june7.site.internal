// components/YankeesScore.js 
import React, { useState, useEffect } from 'react'; 

const YANKEES_TEAM_ID = 147; // New York Yankees MLB Stats API team ID
const MLB_SCHEDULE_API = 'https://statsapi.mlb.com/api/v1/schedule?sportId=1&date=';
const MLB_LIVE_GAME_API = 'https://statsapi.mlb.com/api/v1.1/game/';

interface GameData {
    homeTeam?: string;
    awayTeam?: string;
    homeScore?: number;
    awayScore?: number;
    inning?: string;
    inningHalf?: string;
    status: string;
    gameDate?: string;
    gameTime?: string;
    message?: string;
}

const YankeesScore = () => {
    const [gameData, setGameData] = useState<GameData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchYankeesGame = async () => {
        setLoading(true);
        setError(null);
        try {
            const today = new Date();
            // Format date as YYYY-MM-DD for the API
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;

            const scheduleUrl = `${MLB_SCHEDULE_API}${formattedDate}`;
            const scheduleResponse = await fetch(scheduleUrl);
            if (!scheduleResponse.ok) {
                throw new Error(`HTTP error! status: ${scheduleResponse.status} from schedule API.`);
            }
            const scheduleData = await scheduleResponse.json();
            console.log('MLB Schedule API Response:', scheduleData);

            let currentYankeesGame = null;
            let foundGameToday = false;

            // Find the Yankees' game for today
            if (scheduleData.dates && scheduleData.dates.length > 0) {
                const gamesForToday = scheduleData.dates[0].games;
                for (const game of gamesForToday) {
                    const homeTeamId = game.teams.home.team.id;
                    const awayTeamId = game.teams.away.team.id;
                    if (homeTeamId === YANKEES_TEAM_ID || awayTeamId === YANKEES_TEAM_ID) {
                        foundGameToday = true;
                        // Prioritize live games
                        if (game.status.abstractGameState === 'Live' || game.status.codedGameState === 'I') {
                            currentYankeesGame = { ...game, isLive: true };
                            break; // Found a live game, no need to check others
                        } else if (game.status.abstractGameState === 'Preview' || game.status.codedGameState === 'P') {
                            // If not live, consider the next upcoming game
                            if (!currentYankeesGame || currentYankeesGame.status.abstractGameState !== 'Live') {
                                currentYankeesGame = { ...game, isLive: false };
                            }
                        } else if (game.status.abstractGameState === 'Final') {
                            // If game is final, just show its final score
                            currentYankeesGame = { ...game, isLive: false, isFinal: true };
                        }
                    }
                }
            }

            if (currentYankeesGame) {
                if (currentYankeesGame.isLive) {
                    // Fetch live game feed if game is in progress
                    const liveGameUrl = `${MLB_LIVE_GAME_API}${currentYankeesGame.gamePk}/feed/live`;
                    const liveGameResponse = await fetch(liveGameUrl);
                    if (!liveGameResponse.ok) {
                        throw new Error(`HTTP error! status: ${liveGameResponse.status} from live game API.`);
                    }
                    const liveGameData = await liveGameResponse.json();
                    console.log('MLB Live Game API Response:', liveGameData);

                    // Extract relevant live data
                    const liveScore: GameData = {
                        homeTeam: liveGameData.gameData.teams.home.name,
                        awayTeam: liveGameData.gameData.teams.away.name,
                        homeScore: liveGameData.liveData.linescore.teams.home.runs,
                        awayScore: liveGameData.liveData.linescore.teams.away.runs,
                        inning: liveGameData.liveData.linescore.currentInningOrdinal,
                        inningHalf: liveGameData.liveData.linescore.inningHalf,
                        status: 'Live',
                        // You can add more like outs, bases occupied, etc. from liveGameData.liveData.plays.currentPlay
                    };
                    setGameData(liveScore);
                } else if (currentYankeesGame.isFinal) {
                    setGameData({
                        homeTeam: currentYankeesGame.teams.home.team.name,
                        awayTeam: currentYankeesGame.teams.away.team.name,
                        homeScore: currentYankeesGame.teams.home.score,
                        awayScore: currentYankeesGame.teams.away.score,
                        status: 'Final',
                        gameDate: new Date(currentYankeesGame.gameDate).toLocaleDateString(),
                        gameTime: new Date(currentYankeesGame.gameDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    });
                } else {
                    // It's an upcoming game
                    setGameData({
                        homeTeam: currentYankeesGame.teams.home.team.name,
                        awayTeam: currentYankeesGame.teams.away.team.name,
                        status: 'Upcoming',
                        gameDate: new Date(currentYankeesGame.gameDate).toLocaleDateString(),
                        gameTime: new Date(currentYankeesGame.gameDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    });
                }
            } else {
                setGameData({
                    status: 'No Game',
                    message: foundGameToday ? "Yankees game finished for today." : "No Yankees game scheduled for today."
                });
            }
        } catch (e) {
            console.error("Failed to fetch Yankees game data:", e);
            setError(e instanceof Error ? e.message : String(e));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchYankeesGame(); // Initial fetch
        const intervalId = setInterval(fetchYankeesGame, 30000); // Poll every 30 seconds
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    if (loading) {
        return <div className="yankees-score-widget">Loading Yankees game info...</div>;
    }

    if (error) {
        return <div className="yankees-score-widget error">Error: {error}</div>;
    }

    if (!gameData) {
        return <div className="yankees-score-widget">No game data available.</div>;
    }

    return (
        <div className="yankees-score-widget">
            <h2>New York Yankees</h2>
            {gameData.status === 'Live' ? (
                <div className="live-score">
                    <p>
                        {gameData.awayTeam}: {gameData.awayScore} @ {gameData.homeTeam}: {gameData.homeScore}
                    </p>
                    <p>
                        {gameData.inningHalf} {gameData.inning}
                    </p>
                    <p className="status">Live</p>
                </div>
            ) : gameData.status === 'Final' ? (
                <div className="final-score">
                    <p>FINAL</p>
                    <p>
                        {gameData.awayTeam}: {gameData.awayScore} @ {gameData.homeTeam}: {gameData.homeScore}
                    </p>
                    <p className="status">Game Ended: {gameData.gameDate}</p>
                </div>
            ) : gameData.status === 'Upcoming' ? (
                <div className="next-game">
                    <p>Next Game:</p>
                    <p>{gameData.awayTeam} @ {gameData.homeTeam}</p>
                    <p>Date: {gameData.gameDate}</p>
                    <p>Time: {gameData.gameTime}</p>
                    <p className="status">{gameData.status}</p>
                </div>
            ) : (
                <div className="no-game">
                    <p>{gameData.message}</p>
                </div>
            )}
            <style jsx>{`
                .yankees-score-widget {
                    border: 1px solid #ccc;
                    padding: 20px;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                    text-align: center;
                    max-width: 400px;
                    margin: 20px auto;
                    font-family: Arial, sans-serif;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    color: #003366; /* Yankees blue */
                    margin-bottom: 15px;
                    font-size: 1.8em;
                    border-bottom: 2px solid #003366;
                    padding-bottom: 10px;
                }
                .live-score, .next-game, .final-score, .no-game {
                    margin-top: 20px;
                }
                .live-score p, .final-score p {
                    font-size: 1.6em;
                    font-weight: bold;
                    margin: 8px 0;
                }
                .next-game p, .no-game p {
                    font-size: 1.2em;
                    margin: 5px 0;
                }
                .status {
                    font-style: italic;
                    color: #555;
                    margin-top: 15px;
                }
                .error {
                    color: red;
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

export default YankeesScore;