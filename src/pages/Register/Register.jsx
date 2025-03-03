import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post("http://localhost:5000/auth/register", {
                username,
                email,
                password,
            });

            navigate("/login");
        } catch (err) {
            setError(
                "Error during registration: " + err.response?.data?.message ||
                err.message
            );
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo" onClick={() => navigate('/')} style={{ cursor: "pointer" }}>Connectify</h3>
                    <span className="loginDesc">
                        Stay in touch with your family and friends around the world.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input
                            placeholder="Username"
                            className="loginInput"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
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
                            Sign Up
                        </button>
                        <span className="contAsGuest" onClick={() => navigate('/')}>Continue as guest</span>
                        <button
                            className="loginRegistrationButton"
                            onClick={() => navigate("/login")}
                        >
                            Already have an account? Log in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
