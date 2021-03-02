// import { NavLink }from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';


function Nav({ currentUser, setCurrentUser }) {

    const history = useHistory()

    function logOut(){
        localStorage.removeItem("token")
        setCurrentUser(null)
        history.push("/")
    }

    return (
        <nav>
            {currentUser ? (
                <>
                    <p>Logged in as: {currentUser.username}</p>
                    <NavLink to="/favorites">Favorites</NavLink><br></br>
                    <NavLink to="/dance_videos">Tutorials</NavLink><br></br>
                    <NavLink to="/user_videos">My videos</NavLink><br></br>
                    <NavLink to="/profile">Profile</NavLink><br></br>
                    <NavLink to="/logout" onClick={logOut}>Log out</NavLink>
                </>
            )
                :
                <>
                    <NavLink to="/signup">Sign Up</NavLink><br></br>
                    <NavLink to="/login">Log In</NavLink>
                </>
            }
        </nav>
    )
}

export default Nav;