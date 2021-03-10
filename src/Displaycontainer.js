import { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import FavoriteList from "./FavoriteList";
import DancevideoList from "./DancevideoList";
import UservideoList from "./UservideoList";
import Profile from "./Profile";
import Signup from "./Signup";
import Login from "./Login";
import "./Stylesheet.css"

function Displaycontainer({ currentUser, setCurrentUser }) {
    const [danceVideos, setDanceVideos] = useState([])
    // const [comments, setComments] = useState([])
    const [favorites, setFavorites] = useState([])
    const [userVideos, setUserVideos] = useState([])


    // function onAddRating(ratingValue, video) {
    //     const ratingAverage = video.ratings.map((rating) => rating.rating).reduce((a,b) => a +b, 0)/video.ratings.length
    //     setDanceVideos()
    // }

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

    function onAddFavorite(favoritedVideo) {
        const newFavoriteList = [...favorites, favoritedVideo]
        setFavorites(newFavoriteList)
    }

    function onAddUserVideo(newUserVideo) {
        const newUserVideoList = [...userVideos, newUserVideo]
        setUserVideos(newUserVideoList)
    }

    function onDeleteFav(favVideo) {
        const newFavList = favorites.filter((favorite) => favorite.id !== favVideo.id)
        setFavorites(newFavList)
    }

    function onDeleteUserVideo(deletedVideo) {
        const updatedUserVideoList = userVideos.filter((video) => video.id !== deletedVideo.id)
        setUserVideos(updatedUserVideoList)
    }



    return (
        <div className="display-container">
            <Switch>
                <Route path="/favorites">
                    <FavoriteList currentUser={currentUser} favorites={favorites} onDeleteFav={onDeleteFav} />
                </Route>
                <Route path="/dance_videos">
                    <DancevideoList
                        danceVideos={danceVideos}
                        currentUser={currentUser}
                        onAddFavorite={onAddFavorite}
                        favorites={favorites}
                    />
                </Route>
                <Route path="/user_videos">
                    <UservideoList
                        userVideos={userVideos}
                        currentUser={currentUser}
                        onAddUserVideo={onAddUserVideo}
                        onDeleteUserVideo={onDeleteUserVideo}
                    />
                </Route>
                <Route path="/me">
                    <Profile currentUser={currentUser} />
                </Route>
                <Route path="/signup">
                    <Signup setCurrentUser={setCurrentUser} />
                </Route>
                <Route path="/login" exact to="/">
                    <Login setCurrentUser={setCurrentUser} />
                </Route>
            </Switch>
        </div>
    )
};

export default Displaycontainer;