import './Share.css'
import man from '../../assets/man.jpg'
import { PermMedia, EmojiEmotions } from "@mui/icons-material"
function Share() {
    const isAuthenticated = localStorage.getItem("token")

    return (
        isAuthenticated ? (
            <div className='share'>
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className='shareProfileImg' src={man} />
                        <input className='shareInput' placeholder='What in your mind, Vladyslav?' />
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