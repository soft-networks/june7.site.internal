import { useEffect, useState } from "react";
import { Fairies } from "./fairies";



export default function Cake() {

    const [candleLit, setCandleLit] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setCandleLit(false);
        }, 10000);
    }, []);

    return (
        <div style={{ width: "400px", height: "400px" , cursor: "pointer"}} onClick={() => {
            setCandleLit(true);
        }}>
            <img style={{ width: "100%", height: "100%" }} src="https://storage.googleapis.com/is-this-thing-on/globalstickers/redvelvet.png" />
            <img style={{width: "40%", height: "auto", position: "absolute", top: "-20px", left: "120px"}} src={candleLit ? "https://storage.googleapis.com/is-this-thing-on/june7/candleonn.png" : "https://storage.googleapis.com/is-this-thing-on/june7/candleoff.png"} />
            <p className="noEvents" style={{position: "absolute", top: "75px", left: "50%", color: "hotpink", fontSize: "24px", transform: "translate(-50%, -50%) perspective(500px) rotateX(50deg)", textShadow: "0px 0px 4px yellow", backgroundColor: "white", padding: "10px", borderRadius: "10px"}}>july 9</p>
        </div>
    )
}