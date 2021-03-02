// import logo from './logo.svg';
// import './App.css';
import Nav from "./Nav";
import Displaycontainer from "./Displaycontainer";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token)
      fetch("http://localhost:3000/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => {
          // set the user in state
          setCurrentUser(user)
          console.log(user)
        });
    }
  }, [])

  return (
    <div>
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Displaycontainer currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
