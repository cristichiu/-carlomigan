import "../../setPublic/addNewOffertPannel.scss"

const Offert = () => {
    return (<>
    <div className="offertPannel">
        <div className="pannel">
            <div className="pannelTemp">You have 60s left before this offer is gone forever</div>
            <div className="pannelTop">
                <div className="left">
                    <div className="title">Offert 1</div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, atque. Rem ullam nostrum nisi, laboriosam quam officia aliquam. Fuga deleniti unde distinctio aspernatur dolores accusantium ullam et tenetur, vitae nam soluta rerum itaque repudiandae</div>
                </div>
                <div className="right"></div>
            </div>
            <div className="pannelBottom">
                <div className="price">100$</div>
                <div className="createButton">BUY NOW</div>
            </div>
        </div>
    </div>
    </>)
}

export default Offert