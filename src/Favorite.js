import ReactPlayer from "react-player";

function Favorite({ favorite }) {
    const {dance_video} = favorite

    return (
        <div>
            <ReactPlayer url={dance_video.url} />
            <h2>{dance_video.title}</h2>
            <h4>{dance_video.category}</h4>
            <p>{dance_video.difficulty_level}</p>
        </div>
    )
}

export default Favorite;