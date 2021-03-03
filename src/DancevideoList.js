import Dancevideo from "./Dancevideo";
import { useState } from "react";
import FilterTutorial from "./FilterTutorial"

function DancevideoList({ danceVideos, currentUser, onAddFavorite }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [level, setLevel] = useState("All")

    const filteredVideos = danceVideos.filter((video) => {
        return video.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const filteredVideos2 = filteredVideos.filter((video) => {
        console.log(video)
        if (video.difficulty_level === level){
            return video
        } else if(level === "All"){
            return video
        }
    })

    console.log(filteredVideos2)
    const tutorialVideos = filteredVideos2.map((video) => {
        return <Dancevideo
            key={video.id}
            video={video}
            currentUser={currentUser}
            onAddFavorite={onAddFavorite}
        />
    })

    function handleChange2(e){
        setLevel(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Tutorials</h1>
            <FilterTutorial searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <label>Difficulty: </label>
            <select onChange={handleChange2}>
                <option value="All">All</option>
                <option value="beginner">beginner</option>
                <option value="intermediate">intermediate</option>
                <option value="advanced">advanced</option>
            </select>
            {tutorialVideos}
        </div>
    )
}

export default DancevideoList;