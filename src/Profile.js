import { Card } from "semantic-ui-react";

function Profile({ currentUser }) {

    return (
        <>
            <h1>Profile:</h1>
            <Card>
                <Card.Content>
                    <Card.Header>Name: {currentUser.name}</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Header>Username: {currentUser.username}</Card.Header>
                </Card.Content>
            </Card>
        </>
    )
}

export default Profile;