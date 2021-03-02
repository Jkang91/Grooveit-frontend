import { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import FavoriteList from "./FavoriteList";
import DancevideoList from "./DancevideoList";
import UservideoList from "./UservideoList";
import Profile from "./Profile";
import Signup from "./Signup";
import Login from "./Login";

function Displaycontainer({ currentUser, setCurrentUser }) {
    const [danceVideos, setDanceVideos] = useState([])
    // const [comments, setComments] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/dance_videos')
            .then(resp => resp.json())
            .then((videos) => {
                setDanceVideos(videos)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/favorites`)
        .then(resp => resp.json())
        .then((favorites) => {
            setFavorites(favorites)
        })
    }, [])

    function onAddFavorite(favoritedVideo){
        const newFavoriteList = [...favorites, favoritedVideo]
        setFavorites(newFavoriteList)
    }
    return (
        <div>
            <Switch>
                <Route path="/favorites">
                    <FavoriteList currentUser={currentUser} favorites={favorites} />
                </Route>
                <Route path="/dance_videos">
                    <DancevideoList 
                    danceVideos={danceVideos} 
                    currentUser={currentUser}
                    onAddFavorite={onAddFavorite} />
                </Route>
                <Route path="/user_videos">
                    <UservideoList />
                </Route>
                <Route path="users/me">
                    <Profile />
                </Route>
                <Route path="/signup">
                    <Signup setCurrentUser={setCurrentUser}/>
                </Route>
                <Route path="/login">
                    <Login setCurrentUser={setCurrentUser}/>
                </Route>
            </Switch>
        </div>
    )
};

export default Displaycontainer;