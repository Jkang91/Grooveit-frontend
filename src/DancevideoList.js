import Dancevideo from "./Dancevideo";
import { useState } from "react";
import FilterTutorial from "./FilterTutorial"
import { Card } from "semantic-ui-react";

function DancevideoList({ danceVideos, currentUser, onAddFavorite, onAddRating, favorites }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [level, setLevel] = useState("All")

    const filteredVideos = danceVideos.filter((video) => {
        return video.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const filteredVideos2 = filteredVideos.filter((video) => {
        if (video.difficulty_level === level) {
            return video
        } else if (level === "All") {
            return video
        }
    })

    const tutorialVideos = filteredVideos2.map((video) => {
        return <Dancevideo
            key={video.id}
            video={video}
            currentUser={currentUser}
            onAddFavorite={onAddFavorite}
            onAddRating={onAddRating}
            favorites={favorites}
        />
    })

    function handleChange2(e) {
        setLevel(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="w3-row-padding">
            <h1>Tutorials</h1>
            <FilterTutorial searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <label>Difficulty: </label>
            <select onChange={handleChange2}>
                <option value="All">All</option>
                <option value="beginner">beginner</option>
                <option value="intermediate">intermediate</option>
                <option value="advanced">advanced</option>
            </select>
            <Card.Group itemsPerRow={4}>
                {tutorialVideos}
            </Card.Group>
        </div>
    )
}

export default DancevideoList;