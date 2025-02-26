import './Post.css'
import man from '../../assets/man.jpg'
import { MoreVert } from '@mui/icons-material'
import postImg from "../../assets/man.jpg"
import heart from '../../assets/love.png'
import { Link } from 'react-router-dom'
function Post() {
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={man} className='postProfileImg' />
                        <span className='postUsername'>Vladyslav Blagui</span>
                        <span className='postDate'>28 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! Its my first post!</span>
                    <img className="postImg" src={postImg} />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src={heart} />
                        <span className='postLikeCounter'>8 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='postComments'>2 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post