import Uservideo from "./Uservideo";
import UservideoForm from "./UservideoForm";

function UservideoList({ userVideos, currentUser, onAddUserVideo, onDeleteUserVideo }) {
    const videos = userVideos.map((video) => {
        if(video.user_id === currentUser.id){
        return <Uservideo key={video.id} video={video} onDeleteUserVideo={onDeleteUserVideo}/>
        }
    })

    return (
        <div>
            <UservideoForm currentUser={currentUser} onAddUserVideo={onAddUserVideo} />
            {videos}
        </div>
    )
}

export default UservideoList;