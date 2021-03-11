import CommentList from "./CommentList";
import Ratings from "./Ratings";
import ReactPlayer from "react-player/youtube";
import CommentForm from "./CommentForm";
import FavoriteForm from "./FavoriteForm";
import { useState, useEffect } from "react";
import "./Stylesheet.css"
import { Card } from "semantic-ui-react";



function Dancevideo({ video, currentUser, onAddFavorite, onAddRating, favorites }) {
    const [comments, setComments] = useState([])
    const [vid, setVid] = useState(video)
    const [ratingAverage, setRatingAverage] = useState(0)
    const [userFavorites, setUserFavorites] = useState(currentUser.favorites)


    // console.log("video", video.ratings)
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

    // useEffect(() => {
    //     setUserFavorites(userFavorites.map((f) => f.dance_video_id).includes(video.id))
    // }, [])

    function onAddComment(newComment) {
        const newCommentList = [...comments, newComment]
        setComments(newCommentList)
    }

    function onDelete(deletedComment) {
        const updatedCommentList = comments.filter((comment) => comment.id !== deletedComment.id)
        setComments(updatedCommentList)
    }

    function addFavorite(favoritedVideo) {
        const updatedFavList = [...favorites, favoritedVideo]
        setUserFavorites(updatedFavList)
    }

    // const newFavoriteList = favorites.map((fav) => {
    //     if(fav.map((favs) => { favs.user_id}).includes(currentUser.id)) {
    //         return fav
    //     }
    // })

    // const items = {
    //     header: {video.title},
    //     meta: {}
    // }
    console.log(currentUser.favorites)
    
    return (
        <Card className="ui-card" color="blue" >
            <Card.Content className="ui-content" style={{ backgroundColor: "silver" }} >
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        width={250}
                        height={200}
                        url={video.url}
                        controls={true}
                        light={true} />
                </div>
                <Ratings className="rating" currentUser={currentUser} video={video} ratingAverage={ratingAverage} addRating={addRating} onAddRating={onAddRating} />
                <Card.Header>{video.title}</Card.Header>
                <Card.Meta style={{ color: "blue" }}>
                    Category: {video.category}
                </Card.Meta>
                <Card.Description>
                    Difficulty: {video.difficulty_level}
                </Card.Description>
                {comments ? <h5>Comments:</h5> : null}
                <CommentList comments={comments} onDelete={onDelete} currentUser={currentUser} video={video} />
                <CommentForm
                    currentUser={currentUser}
                    videoId={video.id}
                    onAddComment={onAddComment}
                />
            </Card.Content>
            <Card.Content extra>
                <a>
                    {userFavorites.map((f) => f.dance_video_id).includes(video.id) ?
                    null
                    :
                    <FavoriteForm currentUser={currentUser} video={video} onAddFavorite={onAddFavorite} addFavorite={addFavorite} />
                    }
                </a>
            </Card.Content>
        </Card>
    )
}

export default Dancevideo;