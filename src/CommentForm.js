import { useState } from 'react';
import { Form } from "semantic-ui-react";

function CommentForm({ currentUser, videoId, onAddComment}) {
    const [comment, setComment] = useState('')

    function handleForm(e){
        e.preventDefault()
        fetch(`http://localhost:3000/dance_videos/${videoId}/comments`, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                user_id: currentUser.id, 
                dance_video_id: videoId,
                comment: comment
            })
        })
        .then(resp => resp.json())
        .then(newComment => onAddComment(newComment))
        setComment("")
    }


    
    return (
        <form onSubmit={handleForm}>
            <textarea name="comment" type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <input type="submit" value="New comment"/>
        </form>
    )
}

export default CommentForm;