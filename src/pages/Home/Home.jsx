import "./Home.css"
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from "../../components/Sidebar/Sidebar"
import Rightbar from "../../components/Rightbar/Rightbar"
import Feed from "../../components/Feed/Feed"
function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}

export default Home 