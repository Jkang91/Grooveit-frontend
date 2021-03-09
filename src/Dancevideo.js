import CommentList from "./CommentList";
import Ratings from "./Ratings";
import ReactPlayer from "react-player";
import CommentForm from "./CommentForm";
import FavoriteForm from "./FavoriteForm";
import { useState, useEffect } from "react";
import "./Stylesheet.css"
import { Rating } from "semantic-ui-react";



function Dancevideo({ video, currentUser, onAddFavorite, onAddRating }) {
    const [comments, setComments] = useState([])
    const [vid, setVid] = useState(video)
    const [ratings, setRatings] = useState([])
    const [ratingAverage, setRatingAverage] = useState(0)


    console.log("video", video.ratings)
    // console.log("video", video.comments)
    
    useEffect(() => {
        fetch('http://localhost:3000/comments')
        .then(resp => resp.json())
        .then((comments) => {
            setComments(comments)
        })
    }, [])

    const addRating = (newRating) => {
        // update video.ratings array in state 
         video.ratings.push(newRating)
        //  const newVideoRatings = [...video.ratings, newRating.rating]
        
        setRatingAverage(video.ratings.map((rating) => rating.rating).reduce((a,b) => a +b, 0)/video.ratings.length)
        setVid(video)
    }
    console.log(video.ratings)
    
    useEffect(() => {
        setRatingAverage(video.ratings.map((rating) => rating.rating).reduce((a,b) => a +b, 0)/video.ratings.length)
    }, 0)


    function onAddComment(newComment) {
        const newCommentList = [...comments, newComment]
        setComments(newCommentList)
    }

    function onDelete(deletedComment) {
        const updatedCommentList = comments.filter((comment) => comment.id !== deletedComment.id)
        setComments(updatedCommentList)
    }

    // const ratingAverage = video.ratings.map((rating) => rating.rating).reduce((a,b) => a +b, 0)/video.ratings.length


    console.log(vid.ratings)
    return (
        <div className="display-container">
            <ReactPlayer width={250} height={200} url={video.url} />
            <h3>{video.title}</h3>
            <h4>Category: {video.category}</h4>
            <h4>Difficulty: {video.difficulty_level}</h4>
            {/* <h4>Average rating:<Rating key={Math.random(100)} size="huge" maxRating={5} defaultRating={ratingAverage} value={ratingAverage} />
  </h4> */}
            <Ratings currentUser={currentUser} video={video} ratingAverage={ratingAverage} addRating={addRating} onAddRating={onAddRating} />
            <FavoriteForm
                currentUser={currentUser}
                video={video}
                onAddFavorite={onAddFavorite} />
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