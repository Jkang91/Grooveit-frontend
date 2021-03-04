import ReactStars from "react-rating-stars-component";
import { useState } from 'react';

function Rating({ ratings, currentUser, video, onAddRating }) {
    const [rating, setRating] = useState(3)

    let ratingList = []

    const ratingChanged = (e) => {
        fetch('http://localhost:3000/ratings', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: currentUser.id,
                dance_video_id: video.id,
                rating: rating
            })
        })
        .then(resp => resp.json())
        .then((newNewRating) => {
            setRating(newNewRating)
            onAddRating(newNewRating)
            console.log(newNewRating.rating)
        })
      };

      console.log(ratingList)
   

    return(
        <p>Rating:
        <ReactStars
          count={5}
          value={rating}
          onChange={ratingChanged}
          size={20}
          activeColor="#ffd700"
          isHalf={true}
        />
        </p>
     )
}

export default Rating;