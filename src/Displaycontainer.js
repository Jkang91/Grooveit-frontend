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
    const [userVideos, setUserVideos] = useState([])

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

    useEffect(() => {
        fetch('http://localhost:3000/user_videos')
        .then(resp => resp.json())
        .then((vids) => {
            setUserVideos(vids)
        })
    }, [])

    function onAddFavorite(favoritedVideo){
        const newFavoriteList = [...favorites, favoritedVideo]
        setFavorites(newFavoriteList)
    }

    function onAddUserVideo(newUserVideo){
        const newUserVideoList = [...userVideos, newUserVideo]
        setUserVideos(newUserVideoList)
    }

    function onDeleteFav(favVideo){
        const newFavList = favorites.filter((favorite) => favorite.id !== favVideo.id)
        setFavorites(newFavList)
    }
    return (
        <div>
            <Switch>
                <Route path="/favorites">
                    <FavoriteList currentUser={currentUser} favorites={favorites} onDeleteFav={onDeleteFav} />
                </Route>
                <Route path="/dance_videos">
                    <DancevideoList 
                    danceVideos={danceVideos} 
                    currentUser={currentUser}
                    onAddFavorite={onAddFavorite} />
                </Route>
                <Route path="/user_videos">
                    <UservideoList userVideos={userVideos} currentUser={currentUser} onAddUserVideo={onAddUserVideo} />
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