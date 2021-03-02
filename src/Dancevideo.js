import CommentList from "./CommentList";
import Rating from "./Rating";
import ReactPlayer from "react-player";
import CommentForm from "./CommentForm";
import FavoriteForm from "./FavoriteForm";
import { useState, useEffect } from "react";


function Dancevideo({ video, currentUser, onAddFavorite }) {
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/comments')
        .then(resp => resp.json())
        .then((comments) => {
            setComments(comments)
        })
    }, [])
    
    function onAddComment(newComment) {
        const newCommentList = [...comments, newComment]
        setComments(newCommentList)
    }

    function onDelete(deletedComment){
        const updatedCommentList = comments.filter((comment) => comment.id !==deletedComment.id)
        setComments(updatedCommentList)
    }

    return (
        <div>
            <ReactPlayer url={video.url} />
            <h2>{video.title}</h2>
            <h2>{video.category}</h2>
            <h2>{video.difficulty_level}</h2>
            <Rating />
            <FavoriteForm 
            currentUser={currentUser} 
            video={video} 
            onAddFavorite={onAddFavorite}/>
            <div>
                Comments:
                <CommentList comments={comments} onDelete={onDelete} />
            </div>
            <CommentForm 
            currentUser={currentUser} 
            videoId={video.id}
            onAddComment={onAddComment}
            />
        </div>
    )
}

export default Dancevideo;