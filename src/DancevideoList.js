import Dancevideo from "./Dancevideo";
import { useState } from "react";
import FilterTutorial from "./FilterTutorial"
import { Card, Dropdown } from "semantic-ui-react";
import "./Stylesheet.css";


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

    const difficultyLevels = [
        { key: 'All', value: 'All', text: 'All' },
        { key: 'beginner', value: 'beginner', text: 'beginner' },
        { key: 'intermediate', value: 'intermediate', text: 'intermediate' },
        { key: 'advanced', value: 'advanced', text: 'advanced' }
    ]

    // function handleChange2(e) {
    //     setLevel(e.target.value)
    //     console.log(e.target.value)
    // }

    function handleChange2(e, data) {
        setLevel(data.value)
        console.log(e.target.value)
    }

    

    return (
        <div>
            <h1>Tutorials</h1>
            <FilterTutorial searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="filter">
            <Dropdown 
                onChange={handleChange2}
                options={difficultyLevels}
                placeholder="Select difficulty"
                selection
            />
            </div>
            {/* <label>Difficulty: </label>
            <select onChange={handleChange2}>
                <option value="All">All</option>
                <option value="beginner">beginner</option>
                <option value="intermediate">intermediate</option>
                <option value="advanced">advanced</option>
            </select> */}
            <Card.Group itemsPerRow={4}>
                {tutorialVideos}
            </Card.Group>
        </div>
    )
}

export default DancevideoList;