import { Comment, Button } from "semantic-ui-react"

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
            {comm.user.id === currentUser.id? <Button onClick={() => handleDelete()} content="Delete" size="mini"/> : false}
            </Comment.Content>
        </Comment>
    )
}

export default Comments;