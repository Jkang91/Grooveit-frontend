import Uservideo from "./Uservideo";
import UservideoForm from "./UservideoForm";
import { Card } from 'semantic-ui-react';

function UservideoList({ userVideos, currentUser, onAddUserVideo, onDeleteUserVideo }) {
    const videos = userVideos.map((video) => {
        if (video.user_id === currentUser.id) {
            return <Uservideo key={video.id} video={video} onDeleteUserVideo={onDeleteUserVideo} />
        }
    })

    return (
        <div className="userVideo" >
            <UservideoForm currentUser={currentUser} onAddUserVideo={onAddUserVideo} />
            <Card.Group itemsPerRow={2}>
                {videos}
            </Card.Group>
        </div>
    )
}

export default UservideoList;