import CommentList from "./CommentList";
import Rating from "./Rating";
import ReactPlayer from "react-player";
import CommentForm from "./CommentForm";
import FavoriteForm from "./FavoriteForm";
import { useState, useEffect } from "react";
import "./Stylesheet.css"


function Dancevideo({ video, currentUser, onAddFavorite }) {
    const [comments, setComments] = useState([])
    const [ratings, setRatings] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/comments')
        .then(resp => resp.json())
        .then((comments) => {
            setComments(comments)
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/ratings')
        .then(resp => resp.json())
        .then((ratings) => {
            setRatings(ratings)
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

    function onAddRating(newRating){
        const newRatingList = [...ratings, newRating]
        setRatings(newRatingList)
    }



    return (
        <div className="grid-container">
            <ReactPlayer url={video.url} />
            <h2>{video.title}</h2>
            <h3>Category: {video.category}</h3>
            <h4>Difficulty: {video.difficulty_level}</h4>
            <Rating ratings={ratings} currentUser={currentUser} video={video} onAddRating={onAddRating}/>
            <FavoriteForm 
            currentUser={currentUser} 
            video={video} 
            onAddFavorite={onAddFavorite}/>
            <div>
                <CommentList comments={comments} onDelete={onDelete} currentUser={currentUser} video={video} />
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