// import { NavLink }from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import GrooveitBlack from "./GrooveitBlack.png";
import "./Stylesheet.css"
import "./App.css"



function Nav({ currentUser, setCurrentUser }) {
    const history = useHistory()
    const colors = 'red'

    function logOut() {
        localStorage.removeItem("token")
        setCurrentUser(null)
        history.push("/")
    }

    return (
        <>
            <Menu borderless size="massive" className="header" color="red" >
                <img className="logo" src={GrooveitBlack} style={{ width: "100px" }} />
                        <Menu.Item as="a">
                            <NavLink to="/">About</NavLink>
                        </Menu.Item>

                {currentUser ? (
                    <>
                        <Menu.Item as="a">
                            <NavLink to="/favorites">Favorites</NavLink>
                        </Menu.Item>
                        <Menu.Item as="a">
                            <NavLink to="/dance_videos">Tutorials</NavLink>
                        </Menu.Item>
                        <Menu.Item as="a">
                            <NavLink to="/user_videos">My videos</NavLink>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item as="a">
                                <NavLink to="/me">
                                    {currentUser.username}
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item as="a">
                                <NavLink to="/login" onClick={logOut}>Log out</NavLink>
                            </Menu.Item>
                        </Menu.Menu>
                    </>
                )
                    :
                    <>
                        <Menu.Item as="a">
                            <NavLink to="/signup">Sign Up</NavLink>
                        </Menu.Item>
                        <Menu.Item as="a">
                            <NavLink to="/login">Log In</NavLink>
                        </Menu.Item>
                    </>
                }
            </Menu>
        </>
    )
}

export default Nav;