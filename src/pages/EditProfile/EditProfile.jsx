import './EditProfile.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProfile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [editedData, setEditedData] = useState({
        username: '',
        email: '',
        number: '',
        age: '',
        city: '',
        country: '',
        bio: ''
    });
    const userId = localStorage.getItem("userId")
    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/users/${id}`);
            const data = await response.json();
            setUserData(data);
            setEditedData({
                username: data.username || '',
                email: data.email || '',
                number: data.number || '',
                age: data.age || '',
                city: data.city || '',
                country: data.country || '',
                bio: data.bio || ''
            });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [id]);

    const handleInputChange = (e) => {
        setEditedData({ ...editedData, [e.target.name]: e.target.value });
    };

    const handleSaveChanges = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/usersupd/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedData)
            });

            if (response.ok) {
                navigate(`/profile/${id}`);
            } else {
                const errorData = await response.json();
                console.log("Error updating profile:", errorData.message);
            }
        } catch (e) {
            console.log(e);
        }
    };


    if (!userData) {
        return <p>Loading...</p>;
    }

    const handleBack = () => {
        navigate(`/profile/${id}`);
    };

    return (
        <>
            <button onClick={handleBack} className='backButton'>Back</button>
            <div className="editProfile">
                <h2>Edit Profile</h2>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={editedData.username}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={editedData.email}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Number:
                    <input
                        type="text"
                        name="number"
                        value={editedData.number}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="text"
                        name="age"
                        value={editedData.age}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={editedData.city}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={editedData.country}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Bio:
                    <input
                        type="text"
                        name="bio"
                        value={editedData.bio}
                        onChange={handleInputChange}
                    />
                </label>
                <button onClick={handleSaveChanges}>Save Changes</button>
            </div>
        </>
    );
}

export default EditProfile;
