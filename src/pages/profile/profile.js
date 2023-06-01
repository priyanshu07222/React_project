import "./profile.css" 
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className="profileCoverImg" src="https://media.istockphoto.com/id/1212788585/photo/young-spanish-man-looks-at-tv-in-a-colorful-room-while-protecting-to-coronavirus-covid-19-due.jpg?s=612x612&w=0&k=20&c=W79cabpKk0FOlMAF50tOCvF1HNoKna1pcralEByQ_jg=" alt="" />
                    <img className="profileUserImg" src="https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Priyanshu</h4>
                    <span className="profileInfoDesc">Software Engineer</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/> 
            </div>
            </div>
        </div>
    </>
    )
}
