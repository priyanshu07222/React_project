import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/online";
export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/giftbox.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    }

    const ProfileRightbar = () => {
        return(
        <>
        <h4 className="rightbarTitle" >User information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">New York</span>
            </div>  
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">New Madrid</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
            </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="https://images.pexels.com/photos/15757268/pexels-photo-15757268.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="https://images.pexels.com/photos/3622634/pexels-photo-3622634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="https://images.pexels.com/photos/14688763/pexels-photo-14688763.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/ad.jpg" alt="" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="https://images.pexels.com/photos/16318395/pexels-photo-16318395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
        </div>
        </>)
    }
    return (
        <div className="rightbar" >
            <div className="rightbarWrapper">
            {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}
