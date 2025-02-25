import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import man from "../../assets/man.jpg"
function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Social Media</span>
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
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
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
                <img src={man} alt="Profile" className="topbarImg" />
            </div>
        </div>
    );
}

export default Topbar;
