// import { NavLink }from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';


function Nav({ currentUser, setCurrentUser }) {

    const history = useHistory()

    function logOut() {
        localStorage.removeItem("token")
        setCurrentUser(null)
        history.push("/")
    }

    return (
        <Menu color={"black"}>
            {currentUser ? (
                <>
                    <Menu.Item>
                        <NavLink to="/favorites">Favorites</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/dance_videos">Tutorials</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/user_videos">My videos</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/me">Profile</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/logout" onClick={logOut}>Log out</NavLink>
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <p>Logged in as: {currentUser.username}</p>
                        </Menu.Item>
                    </Menu.Menu>
                </>
            )
                :
                <>
                    <Menu.Item>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/login">Log In</NavLink>
                    </Menu.Item>
                </>
            }
        </Menu>
    )
}

export default Nav;