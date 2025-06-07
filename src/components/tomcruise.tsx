import Image from "next/image";

export function TomCruise() {
    return (
        <div style={{
            animation: 'rotate 20s linear infinite',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Image src='/cruise.png' alt='Tom Cruise' width={200} height={200} />
            <div style={{textAlign: "center"}}>I do my own stunts! <br/>Like this one!</div>
            <style jsx>{`
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    )
}