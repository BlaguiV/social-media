import './Login.css'



function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Connectify</h3>
                    <span className="loginDesc">Stay in touch with your family and friends around the world.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='Password' className="loginInput" />
                        <button className="loginButton">Log in</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegistrationButton">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login