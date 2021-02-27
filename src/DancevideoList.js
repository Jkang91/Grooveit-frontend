import Dancevideo from "./Dancevideo";


function DancevideoList({ danceVideos }) {
    
    const tutorialVideos = danceVideos.map((video) => {
        return <Dancevideo key={video.id} video={video}/>
    })
    return (
        <div>
            <h1>I am a DancevideoList</h1>
            {tutorialVideos}
        </div>
    )
}

export default DancevideoList;