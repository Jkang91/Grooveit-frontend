import ReactPlayer from "react-player";
import { Card } from "semantic-ui-react";

function Uservideo({ video, onDeleteUserVideo }) {
    function handleDelete() {
        fetch(`http://localhost:3000/user_videos/${video.id}`, {
            method: "DELETE"
        })
            .then(deletedVideo => onDeleteUserVideo(video))
    }

    return (
        <Card>
            <Card.Content>
                <h2>I am a video</h2>
                <Card.Header>{video.title}</Card.Header>
                <ReactPlayer url={video.file} />
                <Card.Meta>{video.date}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <button onClick={() => handleDelete()}>Delete</button>
            </Card.Content>
        </Card>
    )
}

export default Uservideo;