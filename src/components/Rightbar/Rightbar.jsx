import './Rightbar.css'
import man from "../../assets/man.jpg"
import { useParams } from 'react-router-dom';
function Rightbar({ profile }) {
    const isAuthenticated = localStorage.getItem("token");

    const { age, city, country } = useParams()

    const HomeRightbar = () => {
        return (
            <>
                {isAuthenticated ? (
                    <>
                        <h4 className='rightbarTitle'>Online friends</h4>
                        <ul className='rightbarFriendList'>
                            <li className='rightbarFriend'>
                                <div className="rightbarProfileImgContainer">
                                    <img className='rightbarProfileImg' src={man} alt="Friend" />
                                    <span className='rightbarOnline'></span>
                                </div>
                                <span className='rightbarUsername'>Victoria Kovalchuk</span>
                            </li>
                        </ul>
                    </>
                ) : null}
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
                        <span className="rightbarInfoValue">{age}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Country:</span>
                        <span className="rightbarInfoValue">{country}</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User friends</h4>
                <div className='rightbarFollowings'>
                    <div className="rightbarFollowing">
                        <img src={man} alt="Friend" className="rightbarFollowingImg" />
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
