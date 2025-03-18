import './Rightbar.css';
import man from '../../assets/man.jpg';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Rightbar({ profile }) {
    const isAuthenticated = localStorage.getItem('token');
    const navigate = useNavigate()
    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    const fetchUserData = async (userId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/users/${userId}`);
            const data = await response.json();
            setUserData(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (id) {
            fetchUserData(id);
        }
    }, [id]);

    const handleEditProfile = () => {
        navigate(`/profile/${id}/editProfile`);
    };


    const HomeRightbar = () => {
        return (
            <>
                {isAuthenticated ? (
                    <>
                        <h4 className='rightbarTitle'>Online friends</h4>
                        <ul className='rightbarFriendList'>
                            <li className='rightbarFriend'>
                                <div className='rightbarProfileImgContainer'>
                                    <img className='rightbarProfileImg' src={man} alt='Friend' />
                                    <span className='rightbarOnline'></span>
                                </div>
                                <span className='rightbarUsername'>Victoria Kovalchuk</span>
                            </li>
                        </ul>
                    </>
                ) : null}
            </>
        );
    };

    const ProfileRightbar = () => {
        if (!userData) {
            return <p>Loading...</p>;
        }

        return (
            <>
                <h4 className='rightbarTitle'>User information</h4>
                <div className='rightbarInfo'>
                    {userData.age && (
                        <div className='rightbarInfoItem'>
                            <span className='rightbarInfoKey'>Age:</span>
                            <span className='rightbarInfoValue'>{userData.age}</span>
                        </div>
                    )}
                    {userData.city && (
                        <div className='rightbarInfoItem'>
                            <span className='rightbarInfoKey'>City:</span>
                            <span className='rightbarInfoValue'>{userData.city}</span>
                        </div>
                    )}
                    {userData.country && (
                        <div className='rightbarInfoItem'>
                            <span className='rightbarInfoKey'>Country:</span>
                            <span className='rightbarInfoValue'>{userData.country}</span>
                        </div>
                    )}
                    <button onClick={handleEditProfile} className='editButton'>Edit profile</button>
                </div>
                <h4 className='rightbarTitle'>User friends</h4>
                <div className='rightbarFollowings'>
                    <div className='rightbarFollowing'>
                        <img src={man} alt='Friend' className='rightbarFollowingImg' />
                        <span className='rightbarFollowingName'>Victoria Kovalchuk</span>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className='rightbar'>
            <div className='rightWrapper'>{profile ? <ProfileRightbar /> : <HomeRightbar />}</div>
        </div>
    );
}

export default Rightbar;