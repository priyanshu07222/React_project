import "./online.css"

export default function Online({user}) {
    // const img = user.profilePicture
    // console.log(img)
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">
                {user.username}
            </span>
        </li>
    )
}
