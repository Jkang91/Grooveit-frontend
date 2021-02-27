// import { NavLink }from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { NavLink } from "react-router-dom";


function Nav({ currentUser, setCurrentUser }) {


    return (
        <nav>
            {currentUser ? (
                <>
                    <NavLink to="/favorites">Favorites</NavLink><br></br>
                    <NavLink to="/dance_videos">Tutorials</NavLink><br></br>
                    <NavLink to="/user_videos">My videos</NavLink><br></br>
                    <NavLink to="/profile">Profile</NavLink>
                </>
            )
                :
                <>
                    <Signup />
                    <Login />
                </>
            }
        </nav>
    )
}

export default Nav;