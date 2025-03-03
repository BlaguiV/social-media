import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import man from "../../assets/man.jpg";
import { Link } from "react-router-dom";

function Topbar() {
    const isAuthenticated = localStorage.getItem("token")

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to='/' style={{ textDecoration: "none" }}>
                    <span className="logo">Connectify</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input
                        placeholder="Search for friend, posts or video"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                {isAuthenticated ? (
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <Person />
                            <span className="topbarBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Chat />
                            <span className="topbarBadge">2</span>
                        </div>
                        <div className="topbarIconItem">
                            <Notifications />
                            <span className="topbarBadge">3</span>
                        </div>
                    </div>
                ) : null}


                {isAuthenticated ? (
                    <Link to="/profile/:username">
                        <img src={man} alt="Profile" className="topbarImg" />
                    </Link>
                ) : (
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <span className="topbarLoginBtn">Log In</span>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Topbar;
