import { useState } from "react";
import { useEffect } from "react";

export function Water() {

    const [showWater, setShowWater] = useState(true);

    useEffect(() => {
        if (showWater) {
            setTimeout(() => {
                setShowWater(false);
            }, 1000);
        }
        if (!showWater) {
            setTimeout(() => {
                setShowWater(true);
            }, 3600000);
        }
    }, [showWater])
    return showWater && <div className="fullScreen" style={{zIndex: 1000}}>
        {[...Array(200)].map((_, i) => (
            <img
                key={i}
                src="https://blob.gifcities.org/gifcities/AVSX5XUWCOIVX6UAV2NBAWPIEWCVQS3I.gif"
                style={{
                    height: "80px",
                    position: "absolute",
                    left: `${Math.random() * 100}vw`,
                    top: `${Math.random() * 100}vh`
                }}
            />
        ))}
    </div>
}

