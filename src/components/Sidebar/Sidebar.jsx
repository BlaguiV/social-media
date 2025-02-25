import './Sidebar.css'
import man from "../../assets/man.jpg"
import { RssFeed, Chat, PlayCircle, Groups, Bookmark, Help } from "@mui/icons-material"
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon' />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Chat className='sidebarIcon' />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className='sidebarListItem'>
                        <PlayCircle className='sidebarIcon' />
                        <span className="sidebarListItemText">Video</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Groups className='sidebarIcon' />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Bookmark className='sidebarIcon' />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Help className='sidebarIcon' />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                </ul>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg' src={man} />
                        <span className='sidebarFriendName'>Vladyslav Blagui</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar