import Comment from "./Comment";

function CommentList({ comments, onDelete, currentUser, video }) {
    const commentsList = comments.map((comm) => {
        if(comm.dance_video_id === video.id){
        return <Comment
            key={comm.id}
            comm={comm}
            onDelete={onDelete}
            currentUser={currentUser}
        />
        }
    })
    return (
        <div>
            {commentsList}
        </div>
    )
}

export default CommentList;