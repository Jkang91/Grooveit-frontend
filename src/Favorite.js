import ReactPlayer from "react-player";
import { Card, Button } from "semantic-ui-react";
import "./Stylesheet.css";

function Favorite({ favorite, onDeleteFav, currentUser }) {
    const { dance_video } = favorite

    function handleDelete() {
        fetch(`http://localhost:3000/favorites/${favorite.id}`, {
            method: "DELETE"
        })
            .then(deletedComment => onDeleteFav(favorite))
    }

    return (
        <Card>
            <Card.Content className="favorite" style={{ backgroundColor: "silver" }}>
                <div className="fav-video">
                    <ReactPlayer width={600} url={dance_video.url} />
                </div>
                <Card.Header>{dance_video.title}</Card.Header>
                <Card.Meta style={{ color: "blue" }}>
                    Category: {dance_video.category}
                </Card.Meta>
                <Card.Description>Difficulty: {dance_video.difficulty_level}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                {favorite.user_id === currentUser.id ? <Button onClick={() => handleDelete()} fluid >Remove</Button> : false}
            </Card.Content>
        </Card>
    )
}

export default Favorite;