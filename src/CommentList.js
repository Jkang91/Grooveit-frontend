import Comment from "./Comment";

function CommentList({ comments, onDelete, currentUser }) {
    const commentsList = comments.map((comm) => {
        return <Comment
            key={comm.id}
            comm={comm}
            onDelete={onDelete}
            currentUser={currentUser}
        />
    })
    return (
        <div>
            <h3>Comments: </h3>
            {commentsList}
        </div>
    )
}

export default CommentList;