import ReactPlayer from "react-player";
import { Card, Button } from "semantic-ui-react";
import "./Stylesheet.css";

function Uservideo({ video, onDeleteUserVideo }) {
    function handleDelete() {
        fetch(`http://localhost:3000/user_videos/${video.id}`, {
            method: "DELETE"
        })
            .then(deletedVideo => onDeleteUserVideo(video))
    }

    return (
        <Card>
            <Card.Content style={{ backgroundColor: "silver" }}>
                <Card.Header className="user-header">
                    {video.title}
                </Card.Header>
                <div className="user-video">
                    <ReactPlayer className='userVid' url={video.file} />
                </div>
                <Card.Header className="user-header">
                    {video.date}
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button fluid onClick={() => handleDelete()}>Delete</Button>
            </Card.Content>
        </Card>
    )
}

export default Uservideo;