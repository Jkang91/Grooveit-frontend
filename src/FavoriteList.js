import Favorite from "./Favorite";
import { Card } from "semantic-ui-react";

function FavoriteList({ favorites, currentUser, onDeleteFav }) {
    const favoritesList = favorites.map((favorite) => {
        if (favorite.user_id === currentUser.id) {
            return <Favorite key={favorite.id} favorite={favorite} onDeleteFav={onDeleteFav} currentUser={currentUser} />
        }
    })

    return (
        <>
            <h1>Favorites List</h1>
            <Card.Group itemsPerRow={2}>
                <div>
                
                </div>
                {favoritesList}
            </Card.Group>
        </>
    )
}

export default FavoriteList;