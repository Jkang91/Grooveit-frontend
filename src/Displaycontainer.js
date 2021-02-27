import { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import FavoriteList from "./FavoriteList";
import DancevideoList from "./DancevideoList";
import UservideoList from "./UservideoList";
import Profile from "./Profile";

function Displaycontainer({ currentUser, setCurrentUser }) {
    const [danceVideos, setDanceVideos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/dance_videos')
            .then(resp => resp.json())
            .then((videos) => {
                setDanceVideos(videos)
                console.log(videos)
            })
    }, [])

    return (
        <div>
            <Switch>
                <Route path="/favorites">
                    <FavoriteList />
                </Route>
                <Route path="/dance_videos">
                    <DancevideoList danceVideos={danceVideos} />
                </Route>
                <Route path="/user_videos">
                    <UservideoList />
                </Route>
                <Route path="users/me">
                    <Profile />
                </Route>
            </Switch>
        </div>
    )
};

export default Displaycontainer;