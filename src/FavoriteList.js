import Favorite from "./Favorite";

function FavoriteList({ favorites, currentUser, onDeleteFav }) {
    const favoritesList = favorites.map((favorite) => {
        if(favorite.user_id === currentUser.id){
        return <Favorite key={favorite.id} favorite={favorite} onDeleteFav={onDeleteFav} currentUser={currentUser} />
        }  
    })

    console.log(currentUser)
    console.log(favoritesList)
    return (
        <div>
            <h1>Favorites</h1>
            {favoritesList}
        </div>
    )
}

export default FavoriteList;