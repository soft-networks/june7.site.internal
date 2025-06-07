import Image from "next/image";

export function TomT() {
    return (
        <div style={{
            animation: 'rotate 20s linear infinite',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{transform: "rotateX(180deg)"}}>THAT'S NOT SO GREAT</div>
            <img 
                src='https://storage.googleapis.com/is-this-thing-on/june7/Frame%20134.png' 
                alt='Tom Cruise' 
                width={200} 
                height={200}
                style={{
                    animation: 'flip 20s linear infinite'
                }}
            />
            <div>THAT'S GREAT</div>

            <style jsx>{`
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                @keyframes flip {
                    0% {
                        transform: rotateX(0deg);
                    }
                    100% {
                        transform: rotateX(360deg);
                    }
                }
            `}</style>
        </div>
    )
}