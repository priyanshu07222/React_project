import "./post.css"
import {MoreVert} from '@mui/icons-material'
import Heart from "./heart.png"
import Like from "./like.png"
import {Users} from "../../dummyData"
import {useState} from "react"
export default function Post({post}) {
    const user = Users.filter(u=>u.id===post.userId)[0];
    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);

    const likeHandler = ()=>{
        setLike(isLiked?like-1:like+1);
        setIsLiked(!isLiked);
    }
    return (
        <div className="post">
            <div className="postWrapper" >
                <div className="postTop" >
                    <div className="postTopLeft" >
                        <img className="postProfileImg" src={user?user.profilePicture:"https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" />
                        <span className="postUsername" >{user?user.username:"Priyanshu"}</span>
                        <span className="postDate" >5 min ago</span>
                    </div>
                    <div className="postTopRight" >
                        <MoreVert/>
                        {/* <button className="postButton" >Share</button> */}
                    </div>
                </div>
                <div className="postCenter" >
                    <span className="postText" >{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom" >
                    <div className="postBottomLeft" >
                        <img className="likeIcon" src={Heart} onClick={likeHandler}  alt="" />
                        <img className="likeIcon" src={Like} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter" >{`${like} people liked it`}</span>
                    </div>
                    <div className="postBottomRight" >
                        <span className="postCommentText" >{post.comment}</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
