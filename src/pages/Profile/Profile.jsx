import './Profile.css';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Feed from "../../components/Feed/Feed";
import cover from '../../assets/cover.jpg';
import man from '../../assets/man.jpg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Profile() {
    const { id } = useParams()
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchUserData = async (userId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/users/${userId}`);
            const data = await response.json();
            setUserData(data)
            setLoading(false)
        } catch (e) {
            console.log(e);
            setLoading(false)
        }
    };

    useEffect(() => {
        if (id) {
            fetchUserData(id)
        }
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!userData) {
        return <div>User not found</div>;
    }

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src={cover} alt="cover" />
                            <img className='profileUserImg' src={man} alt="profile" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>{userData.username}</h4>
                            <span className='profileInfoDesc'>{userData.bio || "No bio available"}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
