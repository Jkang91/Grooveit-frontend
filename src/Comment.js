
function Comment({ comm, onDelete }) {
    const { comment } = comm

    function handleDelete() {
        fetch(`http://localhost:3000/comments/${comm.id}`, {
            method: "DELETE"
        })
        .then(deletedComment => onDelete(comm))
    }
    console.log(comm)
    return (
        <div>
            <p>{comm.user.username}: {comment} </p>
            <button onClick={() => handleDelete()}>Delete</button>
        </div>
    )
}

export default Comment;