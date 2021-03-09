
function FavoriteForm({ currentUser, video, onAddFavorite}){

    function handleSubmit(e){
        const danceVidObj = {
            user_id: currentUser.id,
            dance_video_id: video.id
        }
    
        e.preventDefault()
        fetch(`http://localhost:3000/favorites`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(danceVidObj)
        })
        .then (resp => resp.json())
        .then(favoritedVideo => onAddFavorite(favoritedVideo))
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Favorite" />
            </form>
        </div>
    )
}

export default FavoriteForm;