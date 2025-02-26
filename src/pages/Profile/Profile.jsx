import './Profile.css'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from "../../components/Sidebar/Sidebar"
import Rightbar from "../../components/Rightbar/Rightbar"
import Feed from "../../components/Feed/Feed"
import cover from '../../assets/cover.jpg'
import man from '../../assets/man.jpg'
function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src={cover} />
                            <img className='profileUserImg' src={man} />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Vladyslav Blagui</h4>
                            <span className='profileInfoDesc'>Hello on my profile!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile