import "../../setPublic/login.scss"

const Register = () => {
    return (<>
    <div className="top">
        <div className="logo">logo</div>
        <div className="brandName">Brand Name</div>
    </div>
    <div className="loginContainer">
        <div className="title">Welcome.</div>
        <input type="text" required placeholder="Name"/>
        <input type="text" placeholder="Password"/>
        <input type="text" placeholder="Confirm password"/>
        <div className="button">Register</div>
        <div className="footer">You have an account: <a href="/login">Login here</a></div>
    </div>
    </>)
}

export default Register