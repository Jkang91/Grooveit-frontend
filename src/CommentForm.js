import { useState } from 'react';
import { Form, Button } from "semantic-ui-react";

function CommentForm({ currentUser, videoId, onAddComment}) {
    const [comment, setComment] = useState('')

    function handleForm(e){
        e.preventDefault()
        fetch(`${process.env.REACT_APP_RAILS_URL}/dance_videos/${videoId}/comments`, {
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
        <Form onSubmit={handleForm}>
            <Form.TextArea name="comment" type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <Button type="submit" content="New comment"/>
        </Form>
    )
}

export default CommentForm;