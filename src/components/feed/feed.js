import "./feed.css"
import Share from "../share/share"
import Post from "../post/post"
import {Posts} from "../../dummyData"


export default function feed() {
    return (
        <div className="feed" >
            <div className='feedWrapper' >
                <Share/>
                {Posts.map((post) => (
                    <Post key={post.id} post={post}/>

                ))}
                {/* <Post/> */}
            </div>
        </div>
    )
}
