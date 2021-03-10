import { useState } from 'react';
import { Rating } from 'semantic-ui-react';

function Ratings({ currentUser, video, onAddRating, ratingAverage, addRating }) {
    // const ratingAverage = video.ratings.map((rating) => rating.rating).reduce((a,b) => a +b, 0)/video.ratings.length
    // const [ratingAvg, ]
    // const [rating, setRating] = useState(null)

    // setRating(video.ratings.sum / video.ratings.length)

    // console.log("rate", video.ratings)

    const ratingChanged = (e) => {
        // debugger
        // if(currentUser.ratings.include(rating.id)) {
        //     fetch(`http://localhost:3000/ratings/${rating.id}`)
        // }
        fetch(`http://localhost:3000/ratings`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                user_id: currentUser.id,
                dance_video_id: video.id,
                rating: parseInt(e.target.ariaPosInSet)
            })
        })
        .then(resp => resp.json())
        .then(ratingValue => {
            addRating(ratingValue)
        }) 
        // e.preventDefault();
        // setRating(rating)
        console.log(e.target)
        console.log(e)
    };
    console.log(currentUser.ratings)

    return (
        <div>
            <Rating icon="star" key={Math.random(100)} size="large" maxRating={5} defaultRating={ratingAverage} value={ratingAverage} onRate={ratingChanged} />
        </div>
    )
}

export default Ratings;