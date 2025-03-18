import './Share.css'
import man from '../../assets/man.jpg'
import { PermMedia, EmojiEmotions } from "@mui/icons-material"
import { useState, useEffect } from 'react'

function Share() {
    const isAuthenticated = localStorage.getItem("token");
    const [userData, setUserData] = useState(null);
    const userId = localStorage.getItem("userId") || null;

    useEffect(() => {
        const fetchUserData = async (userId) => {
            try {
                const response = await fetch(`http://localhost:5000/api/users/${userId}`);
                if (!response.ok) throw new Error("Помилка завантаження користувача");
                const data = await response.json();
                setUserData(data);
            } catch (e) {
                console.log("Помилка отримання даних користувача:", e);
            }
        };

        if (userId) {
            fetchUserData(userId);
        }
    }, [userId]);

    return (
        isAuthenticated ? (
            <div className='share'>
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className='shareProfileImg' src={man} alt="Profile" />
                        <input className='shareInput' placeholder={
                            userData ? `What’s on your mind, ${userData.username}?` : "Loading..."
                        } />
                    </div>
                    <hr className='shareHr' />
                    <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <PermMedia htmlColor="gray" className='shareIcon' />
                                <span className='shareOptionText'>Photo or Video</span>
                            </div>
                            <div className="shareOption">
                                <EmojiEmotions htmlColor="orange" className='shareIcon' />
                                <span className='shareOptionText'>Emoji</span>
                            </div>
                        </div>
                        <button className='shareButton'>Share</button>
                    </div>
                </div>
            </div>
        ) : null
    )
}

export default Share
