import { useState } from 'react';
import { Rating, Form } from 'semantic-ui-react';

function Ratings({ currentUser, video, onAddRating, ratingAverage, addRating }) {
    // const ratingAverage = video.ratings.map((rating) => rating.rating).reduce((a,b) => a +b, 0)/video.ratings.length
    // const [ratingAvg, ]
    // const [rating, setRating] = useState(null)

    // setRating(video.ratings.sum / video.ratings.length)

    // console.log("rate", video.ratings)

    const ratingChanged = (e) => {
        // debugger
        // if(currentUser.ratings.include?(rating)){
            // fetch(`http://localhost:3000/ratings/${}`)
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
            // setRating(ratingValue)
            // onAddRating(ratingValue, video)
            // setRating(e.target)
            // setVideo(e.target) => update the video.ratings array
            addRating(ratingValue)
            console.log(ratingValue.rating)
            console.log(ratingValue)
            console.log(video.ratings)
            console.log(e.target.id)
        }) 
        // e.preventDefault();
        // setRating(rating)
        // console.log(e.target)
    };
    console.log(currentUser.ratings)
    
    // const avgRating = ratings.map((r) => {
    //     if(r.id === rating.id) {
    //         return <Rating size="huge" maxRating={5} defaultRating={r.rating} value={rating} onRate={ratingChanged} disabled/>
    //     }
    // })

    return (
        <div>
            <Rating key={Math.random(100)} size="huge" maxRating={5} defaultRating={ratingAverage} value={ratingAverage} onRate={ratingChanged} />
        </div>
    )
}

export default Ratings;