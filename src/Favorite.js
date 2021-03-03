import ReactPlayer from "react-player";

function Favorite({ favorite, onDeleteFav, currentUser }) {
    const {dance_video} = favorite

    function handleDelete(){
        fetch(`http://localhost:3000/favorites/${favorite.id}`, {
            method: "DELETE"
        })
        .then(deletedComment => onDeleteFav(favorite))
    }

    return (
        <div>
            <ReactPlayer url={dance_video.url} />
            <h2>{dance_video.title}</h2>
            <h4>{dance_video.category}</h4>
            <p>{dance_video.difficulty_level}</p>
            {favorite.user_id === currentUser.id ? <button onClick={() => handleDelete()}>Remove</button> : false}
        </div>
    )
}

export default Favorite;