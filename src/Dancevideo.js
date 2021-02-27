import CommentList from "./CommentList";
import Rating from "./Rating";
import ReactPlayer from "react-player";

function Dancevideo({ video }) {
    return (
        <div>
            <ReactPlayer url={video.url} />
            <h2>{video.title}</h2>
            <h2>{video.category}</h2>
            <h2>{video.difficulty_level}</h2>
            <Rating />
            <CommentList />
        </div>
    )
}

export default Dancevideo;