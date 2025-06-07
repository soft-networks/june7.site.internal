"use client"

import { useState } from 'react';
import { vote, getVotes } from '@/lib/firebase';
import { useEffect } from 'react';

export default function TonyVoter() {
    const [hasVoted, setHasVoted] = useState(false);

    const handleVote = async (name: string) => {
        await vote(name);
        setHasVoted(true);
    }

    if (!hasVoted) {
        return (
            <div style={{
                backgroundColor: "#5cb85c",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                color: "white",
            }} className="stack:s-2">
                <p>TONY AWARDS 2025</p>
                <div className="padded:s-2 fill:white cursor:pointer" style={{color: "blue"}} onClick={() => handleVote('audra')}>
                    vote for audra
                </div>
                <div className="padded:s-2 fill:white cursor:pointer" style={{color: "blue"}} onClick={() => handleVote('nicole')}>
                    vote for nicole
                </div>
            </div>
        )
    } else {
       return <TonyResults />
    }
} 


const TonyResults = () => {
    const [voteResults, setVoteResults] = useState<Record<string, number> | null>(null);

    useEffect(() => {
        const fetchResults = async () => {
            const results = await getVotes();
            setVoteResults(results);
        }
        fetchResults();
    }, []);

    return (
        <div style={{
            backgroundColor: "#5cb85c",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            color: "blue",
        }} className="stack:s-2" >
            {!voteResults && <p>loading....</p>}
            {voteResults && voteResults["nicole"] > voteResults["audra"] && <div className="stack"><img src="https://www.theatermania.com/wp-content/uploads/sites/4/2024/08/nicole-scherzinger-.jpg.webp" style={{width: "50px", borderRadius: "50%"}}></img><p>Nicole wins!</p></div>}
            {voteResults && voteResults["audra"] > voteResults["nicole"] && <div className="stack"><img src="https://m.media-amazon.com/images/M/MV5BMTUzMzY3NzA0OV5BMl5BanBnXkFtZTcwODQ4OTI2Mg@@._V1_.jpg" style={{width: "50px", borderRadius: "50%"}}></img><p>Audra wins!</p></div>}
        </div>
    )
}
