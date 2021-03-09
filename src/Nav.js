// import { NavLink }from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import GrooveitBlack from "./GrooveitBlack.png";
import "./Stylesheet.css"
import "./App.css"


function Nav({ currentUser, setCurrentUser }) {

    const history = useHistory()

    function logOut() {
        localStorage.removeItem("token")
        setCurrentUser(null)
        history.push("/")
    }

    return (
        <Menu className="header" style={{ color: "white" }} >
            {currentUser ? (
                <>
                    <img className="logo" src={GrooveitBlack} width={300} height={300} />
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
                        <NavLink to="/logout" onClick={logOut}>Log out</NavLink>
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <NavLink to="/me">{currentUser.username}</NavLink>
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