import { useEffect, useState } from 'react'
import '../../setPublic/home.scss'

const Home = () => {
    const [userState, setUserState] = useState(false)
    const [userData, setUserData] = useState("undefined")
    let userId = localStorage.getItem('userId')
    if(userId) {
        // post to backend to get username
    }
    function descIntegration() {
        const desc = document.querySelectorAll(".offert .desc")
        const photo = document.querySelectorAll(".offert .photo")
        const title = document.querySelectorAll(".offert .title")
        const offert = document.querySelectorAll(".offert")
        for(let i=0; i<offert.length; i++) {
            const val = offert[i].clientHeight - photo[i].clientHeight - title[i].clientHeight - 150
            desc[i].style.height = val + "px"
        }
    }
    useEffect(() => {
        descIntegration()
        window.addEventListener('resize', descIntegration)
    }, [])
    return (<>
    <div className="homeContainer">
        <div className="navbar">
            <div className="brandName">Brand Name</div>
            <div className="container">
                {!userState && <div className="loginRegister">
                    <a href='/register'>Register</a>
                    <a href='/login'>Login</a>
                </div>}
                {userState && <a href='#' className='myPost'>My Offert</a>}
                {userState && <div className="username">{userData}</div>}
            </div>
        </div>
        <div className="main">
            <div className="offerts">
                <div className='offert'>
                    <div className="photo"></div>
                    <div className="title">Offert 1</div>
                    <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio voluptatibus consequatur delectus excepturi eum voluptatem, autem corporis qui odit ea. Deserunt dignissimos, provident commodi, expedita repellendus fugiat, tenetur quis accusamus consequuntur itaque ea? Laudantium reiciendis neque distinctio quam, officia odit sunt voluptates reprehenderit, doloremque amet alias placeat, dignissimos velit?</div>
                    <div className="button">Buy now</div>
                    <div className="price">Price: 100$</div>
                </div>
                <div className='offert'>
                    <div className="photo"></div>
                    <div className="title">Offert 2</div>
                    <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio voluptatibus consequatur delectus excepturi eum voluptatem, autem corporis qui odit ea. Deserunt dignissimos, provident commodi, expedita repellendus fugiat, tenetur quis accusamus consequuntur itaque ea? Laudantium reiciendis neque distinctio quam, officia odit sunt voluptates reprehenderit, doloremque amet alias placeat, dignissimos velit?</div>
                    <div className="button">Buy now</div>
                    <div className="price">Price: 100$</div>
                </div>
                <div className='offert'>
                    <div className="photo"></div>
                    <div className="title">Offert 3</div>
                    <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio voluptatibus consequatur delectus excepturi eum voluptatem, autem corporis qui odit ea. Deserunt dignissimos, provident commodi, expedita repellendus fugiat, tenetur quis accusamus consequuntur itaque ea? Laudantium reiciendis neque distinctio quam, officia odit sunt voluptates reprehenderit, doloremque amet alias placeat, dignissimos velit?</div>
                    <div className="button">Buy now</div>
                    <div className="price">Price: 100$</div>
                </div>
                <div className='offert'>
                    <div className="photo"></div>
                    <div className="title">Offert 4</div>
                    <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio voluptatibus consequatur delectus excepturi eum voluptatem, autem corporis qui odit ea. Deserunt dignissimos, provident commodi, expedita repellendus fugiat, tenetur quis accusamus consequuntur itaque ea? Laudantium reiciendis neque distinctio quam, officia odit sunt voluptates reprehenderit, doloremque amet alias placeat, dignissimos velit?</div>
                    <div className="button">Buy now</div>
                    <div className="price">Price: 100$</div>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Home