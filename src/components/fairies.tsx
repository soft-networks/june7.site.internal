"use client"

import { useEffect, useState } from "react";

const fairyArray = [
    "https://blob.gifcities.org/gifcities/QF3NT7FAQ7D7HMWZGCE4TU4QGBGNBMGW.gif",
    "https://blob.gifcities.org/gifcities/IPFTU5NCGDYORPGUE2UKRJFE3WXBLYMF.gif",
    "https://blob.gifcities.org/gifcities/RKKZCJJHCLNGLW23UM4XOGXW76GU7F5R.gif",
    "https://blob.gifcities.org/gifcities/UEPMPPBGDS3LWQDWZQT4JZPC4HHM5SKS.gif",
    "https://blob.gifcities.org/gifcities/DOT5EASPAARUXBDXJEVHNGDQ6SJUCGWL.gif"
]

const girlies = ["josie", "kaylin", "hannah", "mira", "maya", "lila", "andria", "bobo"]

export function Fairies() {
    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', zIndex: 0}}>
            {girlies.map((girly, i) => {
                const fairyImg = fairyArray[i % fairyArray.length];
                return (
                    <div 
                        key={girly}
                        style={{
                            position: 'absolute',
                            animation: `fly${i} ${40 + i * 2}s infinite linear`,
                        }}
                    >
                        <img 
                            src={fairyImg} 
                            alt={girly}
                            style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'contain',
                                transform: 'translate(-50%,-50%)'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            fontFamily: 'Brush Script MT, cursive',
                            fontSize: '24px',
                            color: 'white',
                            textShadow: '2px 2px 4px #000000'
                        }}>
                            {girly}
                        </div>
                        <style jsx>{`
                            @keyframes fly${i} {
                                0%, 100% {
                                    transform: translateX(-100px) translateY(${Math.random() * 100}vh);
                                }
                                50% {
                                    transform: translateX(100vw) translateY(${Math.random() * 100}vh);
                                }
                            }
                        `}</style>
                    </div>
                );
            })}
        </div>
    )
}