import { Form, Button } from "semantic-ui-react";
function FavoriteForm({ currentUser, video, onAddFavorite, addFavorite }){

    function handleSubmit(e){
        const danceVidObj = {
            user_id: currentUser.id,
            dance_video_id: video.id
        }
    
        e.preventDefault()
        fetch(`${process.env.REACT_APP_RAILS_URL}/favorites`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(danceVidObj)
        })
        .then (resp => resp.json())
        .then(favoritedVideo => {
            onAddFavorite(favoritedVideo)
            addFavorite(favoritedVideo)
        }
        )}
    return(
            <Form onSubmit={handleSubmit}>
                <Button type="submit" content="Favorite" fluid/>
            </Form>
    )
}

export default FavoriteForm;