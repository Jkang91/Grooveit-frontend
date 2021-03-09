import { useState } from 'react';

function UservideoForm({ currentUser, onAddUserVideo }){
    const [title, setTitle] = useState("")
    const [file, setFile] = useState("")
    const [date, setDate] = useState("")

    function handleForm(e){
        e.preventDefault()
        fetch(`http://localhost:3000/user_videos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: currentUser.id,
                title: title,
                file: file,
                date: date
            })
        })
        .then(resp => resp.json())
        .then(userVideo => onAddUserVideo(userVideo))
    }

    return(
        <div>
            <form onSubmit={handleForm}>
                <h2>Upload your video</h2>
                <label>Title:</label>
                <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>My video:</label>
                <input name="file" type="file" accept=".mov" value={file} onChange={(e) => setFile(e.target.value)} />

                <label>Date:</label>
                <input name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />

                <input type="submit" value="Upload"/>
            </form>
        </div>
    )
}

export default UservideoForm;