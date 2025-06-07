"use client"

import { useState, useRef } from "react";

export function SnackRecommender() {
    const [snack, setSnack] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const previousSuggestions = useRef<string[]>([]);

    const getSnack = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/ai", {
                method: "POST",
                body: JSON.stringify({ message: "Give me a new snack combo recommendation. My current grapes and cheese and crackers and jam fixation is wearing off. Only give me the snack combo, no other text. Reply format is like: ingredient1 + ingredient2 + ingredient3 etc... Make sure to do something different than the previous suggestions. Previous suggestions: " + previousSuggestions.current.join(", ") }),
            });
            const data = await response.json();
            setSnack(data.choices[0].message.content);
            previousSuggestions.current.push(data.choices[0].message.content);
        } catch (error) {
            console.error("Failed to fetch snack:", error);
            setSnack("Oops! Couldn't fetch a snack. Try again?");
        } finally {
            await new Promise(res => setTimeout(res, 2000)); // Fake 2s delay for animation
            setIsLoading(false);
        }
    }

    return (
        <div style={{ 
            backgroundColor: "#5cb85c", // Green background to match image
            padding: "15px", // Reduced padding
            borderRadius: "10px", 
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}>
            <style jsx global>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-30px);
                    }
                    60% {
                        transform: translateY(-15px);
                    }
                }
                .bouncing-emoji {
                    display: inline-block;
                    animation: bounce 2s infinite;
                    fontSize: '2rem';
                    margin: '0 5px';
                }
                .bouncing-emoji:nth-child(1) { animation-delay: 0s; }
                .bouncing-emoji:nth-child(2) { animation-delay: 0.2s; }
                .bouncing-emoji:nth-child(3) { animation-delay: 0.4s; }
                .bouncing-emoji:nth-child(4) { animation-delay: 0.6s; }
            `}</style>
            <h3 style={{
                fontSize: "1.5rem", // Reduced font size
                fontWeight: "bold", 
                color: "#FFFFFF", // White color for title
                marginBottom: "15px" // Reduced margin
            }}>Snack Recommender</h3>
            <button 
                onClick={getSnack} 
                disabled={isLoading} 
                style={{
                    backgroundColor: isLoading ? "#cccccc" : "#FFC107", // Amber/Yellow-Orange button
                    color: isLoading ? "#666666" : "#000000", // Black text color for button
                    padding: "8px 18px", // Reduced padding
                    borderRadius: "8px", 
                    fontSize: "1rem", // Reduced font size
                    fontWeight: "bold", 
                    cursor: isLoading ? "default" : "pointer",
                    border: "none",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    transition: "background-color 0.3s ease"
                }}
            >
                {isLoading ? "Finding a snack..." : "Click for Snack Combo"}
            </button>
            <div style={{minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {isLoading && (
                    <div>
                        <span className="bouncing-emoji">🍇</span>
                        <span className="bouncing-emoji">🧀</span>
                        <span className="bouncing-emoji">🥨</span>
                        <span className="bouncing-emoji">🎉</span>
                    </div>
                )}
                {snack && !isLoading && (
                    <p style={{
                        fontSize: "1.1rem", // Reduced font size
                        fontWeight: "bold", 
                        color: "#4682B4", // Steel Blue for snack text
                        marginTop: "15px", // Reduced margin
                        padding: "8px", // Reduced padding
                        backgroundColor: "#F0F8FF", // Alice Blue background for snack text
                        borderRadius: "5px",
                        width: '100%', // Ensure it takes up space for centering
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>{snack}</p>
                )}
            </div>
        </div>
    )
}