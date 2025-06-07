
export default function ImageCarousel() {
    return (
        <div className="stack:horizontal" style={{height: "200px"}}>
        <img 
            src="https://blob.gifcities.org/gifcities/2DHA5QEVF4RKHQP3FJCF6ZN7BROBS7RP.gif" 
            style={{
                width: "150px"
            }}
        />
        <img 
            src="https://blob.gifcities.org/gifcities/EZUZQGBU3UMQACREUC27YTHQRHBNJL5M.gif" 
            style={{
                height: "150px"
            }}
        />
        <img 
            src="https://m.media-amazon.com/images/I/71i3D6bC9DL._AC_UF1000,1000_QL80_.jpg" 
            style={{
                width: "100px", 
                height: "100px"
            }}
        />
        <img 
            src="https://blob.gifcities.org/gifcities/45E6OV6JI5GQFSEFTPBMEBAY6ZBL7UZA.gif" 
            style={{
                width: "100px", 
                height: "100px"
            }}
        />
        <img src="https://tbrann.weebly.com/uploads/5/6/4/5/56459711/695742.jpg?1451569151" style={{width: "100px", height: "100px", animation: "crawl 20s forwards"}}></img>
    </div>
    )
}