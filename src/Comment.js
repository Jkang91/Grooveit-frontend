
function Comment({ comm, onDelete, currentUser }) {
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
            {comm.user.id === currentUser.id? <button onClick={() => handleDelete()}>Delete</button> : false}
        </div>
    )
}

export default Comment;