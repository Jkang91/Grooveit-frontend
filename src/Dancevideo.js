import CommentList from "./CommentList";
import Ratings from "./Ratings";
import ReactPlayer from "react-player/youtube";
import CommentForm from "./CommentForm";
import FavoriteForm from "./FavoriteForm";
import { useState, useEffect } from "react";
import "./Stylesheet.css"
import { Card } from "semantic-ui-react";



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
        video.ratings.push(newRating)
        setRatingAverage(video.ratings.map((rating) => rating.rating).reduce((a, b) => a + b, 0) / video.ratings.length)
        setVid(video)
    }
    console.log(currentUser.favorites)

    useEffect(() => {
        setRatingAverage(video.ratings.map((rating) => rating.rating).reduce((a, b) => a + b, 0) / video.ratings.length)
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
        <Card>
            <Card.Content>
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        width={250}
                        height={200}
                        url={video.url}
                        controls={true} />
                </div>
                <Card.Header>{video.title}</Card.Header>
                <Card.Meta>
                    Category: {video.category}
                </Card.Meta>
                <Card.Description color="blue">
                    Difficulty: {video.difficulty_level}
                </Card.Description>
                {comments ? null : <h5>Comments:</h5>}
                <CommentList comments={comments} onDelete={onDelete} currentUser={currentUser} video={video} />
                <Ratings currentUser={currentUser} video={video} ratingAverage={ratingAverage} addRating={addRating} onAddRating={onAddRating} />
                <CommentForm
                    currentUser={currentUser}
                    videoId={video.id}
                    onAddComment={onAddComment}
                />
            </Card.Content>
            <Card.Content extra>
                <a>
                    {currentUser.favorites.includes(video.id) ? 
                    null
                    :                     
                    <FavoriteForm currentUser={currentUser} video={video} onAddFavorite={onAddFavorite} />
                    }
                </a>
            </Card.Content>
        </Card>
    )
}

export default Dancevideo;