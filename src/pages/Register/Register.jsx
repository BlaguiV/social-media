import './Register.css'



function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Connectify</h3>
                    <span className="loginDesc">Stay in touch with your family and friends around the world.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Username' className="loginInput" />
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='Password' className="loginInput" />
                        <input placeholder='Confirm Password' className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegistrationButton">Log into account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register