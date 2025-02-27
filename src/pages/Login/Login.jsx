import { useState } from 'react';
import './Login.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleRegisterRedirect = () => {
        navigate('/register')
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/login', { email, password })
            const token = response.data.token
            localStorage.setItem("token", token)
            navigate('/')
        } catch (err) {
            setError("Invalid email or password")
            console.log(err)
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Connectify</h3>
                    <span className="loginDesc">Stay in touch with your family and friends around the world.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input
                            placeholder='Email'
                            className="loginInput"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder='Password'
                            className="loginInput"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="loginButton" onClick={handleLogin}>Log in</button>
                        {error && <span className="loginError">{error}</span>}
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegistrationButton" onClick={handleRegisterRedirect}>Create a new account</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
