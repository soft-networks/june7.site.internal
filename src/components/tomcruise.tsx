import Image from "next/image";

export function TomCruise() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Image src='/cruise.png' alt='Tom Cruise' width={200} height={200} style={{ animation: 'rotate 10s linear infinite' }}/>
            <div style={{ textAlign: "center"}}>I do my own stunts! <br />Like this one!</div>
            <style jsx>{`
                @keyframes rotate {
                    0% {
                        transform: rotate(0deg) scale(1);
                    }
                    20% {
                        transform: rotate(180deg) scale(0.8) translateY(-20px);
                    }
                    40% {
                        transform: rotate(360deg) scale(1.2) translateX(30px);
                    }
                    60% {
                        transform: rotate(540deg) skew(10deg) translateY(20px);
                    }
                    80% {
                        transform: rotate(720deg) scale(0.9) translateX(-30px);
                    }
                    100% {
                        transform: rotate(1080deg) scale(1);
                    }
                }
            `}</style>
        </div>
    )
}