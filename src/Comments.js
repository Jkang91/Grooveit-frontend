import { Comment } from "semantic-ui-react"
function Comments({ comm, onDelete, currentUser }) {
    const { comment } = comm

    function handleDelete() {
        fetch(`http://localhost:3000/comments/${comm.id}`, {
            method: "DELETE"
        })
        .then(deletedComment => onDelete(comm))
    }
   
    return (
        <Comment>
            <Comment.Content>
            <Comment.Author as="a">{comm.user.username}: </Comment.Author>
            <Comment.Text>
                <p>{comment}</p>
            </Comment.Text>
            {comm.user.id === currentUser.id? <button onClick={() => handleDelete()}>Delete</button> : false}
            </Comment.Content>
        </Comment>
    )
}

export default Comments;