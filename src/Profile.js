function Profile({ currentUser }) {

    return(
        <div>
            <h1>Profile:</h1>
            <h1>Name: {currentUser.name}</h1>
            <h2>Username: {currentUser.username}</h2>
        </div>
    )
}

export default Profile;