import { useState } from "react";
import { useEffect } from "react";

const rainbowAnimLength = 3000;

export const Happiness = () => {
    const [happinessTriggered, setHappinessTriggered] = useState(false);

    useEffect(() => {
        if (happinessTriggered) {
            setTimeout(() => {
                setHappinessTriggered(false);
            }, rainbowAnimLength + 1000);
        }
    }, [happinessTriggered])

    return (
        <>
            {happinessTriggered && (
                <div className="fullBleed" style={{opacity: 0.8}}>
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: 0,
                    height: "100%",
                    background: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
                    animation: `rainbowGrow ${rainbowAnimLength}ms forwards`,
                    transform: "translateY(-50%)",
                    opacity: 1,
                }}>
                </div>
                 {[...Array(10)].map((_, i) => (
                    <div key={i} style={{
                        position: "fixed",
                        top: `${Math.random() * 100}%`,
                        left: 0,
                        height: `${Math.random() * 30 + 20}%`,
                        background: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
                        animation: `rainbowGrow ${rainbowAnimLength * (Math.random() * 0.5 + 0.5)}ms forwards ${Math.random() * rainbowAnimLength/2}ms`,
                        opacity: Math.random() * 0.3 + 0.7,
                    }}>
                </div>
                ))}
                </div>
            )}
            <div className="cursor:pointer" onClick={() => {
                setHappinessTriggered(true);
            }} style={{ width: "200px", height: "200px", display: " flex", backgroundColor: "hotpink", color: "white", alignItems: "center", justifyContent: "center", borderRadius: "50%", textAlign: "center" }}>click here to choose yourself <br/>& choose happiness</div>
        </>
    )
}