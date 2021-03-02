import Comment from "./Comment";

function CommentList({ comments, onDelete }) {
    const commentsList = comments.map((comm) => {
        return <Comment
            key={comm.id}
            comm={comm}
            onDelete={onDelete}
        />
    })
    return (
        <div>
            <h3>I am a Comment List</h3>
            {commentsList}
        </div>
    )
}

export default CommentList;