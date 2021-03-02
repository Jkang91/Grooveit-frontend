import Favorite from "./Favorite";

function FavoriteList({ favorites, currentUser }) {
    const favoritesList = favorites.map((favorite) => {
        if(favorite.user_id === currentUser.id){
        return <Favorite key={favorite.id} favorite={favorite} />
        }
    })

    console.log(currentUser)
    console.log(favoritesList)
    return (
        <div>
            <h1>I am the FavoriteList</h1>
            {favoritesList}
        </div>
    )
}

export default FavoriteList;