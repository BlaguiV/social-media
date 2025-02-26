import './Rightbar.css'
import man from "../../assets/man.jpg"
import Profile from '../../pages/Profile/Profile'
function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>Online friends</h4>
                <ul className='rightbarFriendList'>
                    <li className='rightbarFriend'>
                        <div className="rightbarProfileImgContainer">
                            <img className='rightbarProfileImg' src={man} />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>Victoria Kovalchuk</span>
                    </li>
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Age:</span>
                        <span className="rightbarInfoValue">18</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Vinnitsya</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Country:</span>
                        <span className="rightbarInfoValue">Ukraine</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User friends</h4>
                <div className='rightbarFollowings'>
                    <div className="rightbarFollowing">
                        <img src={man} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Victoria Kovalchuk</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={man} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mikola Naborskii</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={man} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Tanya Blagui</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={man} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mikola Blagui</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={man} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Victoria Kovalchuk</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={man} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Victoria Kovalchuk</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className="rightWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar