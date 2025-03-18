import { useState, useEffect } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");
        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleGuest = () => {
        navigate('/')
    }

    const handleRegisterRedirect = () => {
        navigate('/register')
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/auth/login', { email, password });
            const token = response.data.token;
            const userId = response.data.userId;

            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);

            if (rememberMe) {
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("email");
                localStorage.removeItem("password");
            }

            navigate('/');
        } catch (err) {
            setError("Invalid email or password");
            console.log(err);
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
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            placeholder='Password'
                            className="loginInput"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {error && <span className="loginError">{error}</span>}
                        <div className="forgot">
                            <section>
                                <input
                                    type="checkbox"
                                    id="check"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor="check">Remember me</label>
                            </section>
                        </div>
                        <button className="loginButton" onClick={handleLogin}>Log in</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <span className='contAsGuest' onClick={handleGuest}>Continue as guest</span>
                        <button className="loginRegistrationButton" onClick={handleRegisterRedirect}>Create a new account</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
