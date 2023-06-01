import "../../setPublic/login.scss"

const Login = () => {
    return (<>
    <div className="top">
        <div className="logo">logo</div>
        <div className="brandName">Brand Name</div>
    </div>
    <div className="loginContainer">
        <div className="title">Welcome Back.</div>
        <input type="text" required placeholder="Name"/>
        <input type="text" placeholder="Password"/>
        <div className="button">Login</div>
        <div className="footer">You don't have an account: <a href="/register">Create here</a></div>
    </div>
    </>)
}

export default Login