function Uservideo({ video }) {
    return(
        <div>
            <h2>I am a video</h2>
            <h4>{video.title}</h4>
            <h4>{video.file}</h4>
            <h4>{video.date}</h4>
        </div>
    )
}

export default Uservideo;