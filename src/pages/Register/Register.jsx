import { useNavigate } from 'react-router-dom'
import './Register.css'
import { useState } from 'react'
import axios from 'axios'

function Register() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const navigate = useNavigate()

    const handleLoginRedirect = () => {
        navigate('/login')
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        // Перевірка на порожні поля
        if (!email || !password || (!isLogin && !username)) {
            setError('All fields are required')
            return
        }

        try {
            if (isLogin) {
                const response = await axios.post('http://localhost:5000/auth/login', { email, password })
                const token = response.data.token
                localStorage.setItem("token", token)
                navigate('/')
            } else {
                const response = await axios.post('http://localhost:5000/auth/registration', { email, username, password })
                setIsLogin(true)
                navigate('/login')
            }
        } catch (err) {
            setError('Something went wrong, please try again.')
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Connectify</h3>
                    <span className="loginDesc">Stay in touch with your family and friends around the world.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleRegister}>
                        {!isLogin && (
                            <input
                                placeholder="Username"
                                className="loginInput"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        )}
                        <input
                            placeholder="Email"
                            className="loginInput"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Password"
                            className="loginInput"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <span className="registerError">{error}</span>}
                        <button className="loginButton" type="submit">
                            {isLogin ? 'Log In' : 'Sign Up'}
                        </button>
                        <button className="loginRegistrationButton" onClick={handleLoginRedirect}>
                            {isLogin ? 'Create an account' : 'Log into account'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
