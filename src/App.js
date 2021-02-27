// import logo from './logo.svg';
// import './App.css';
import Nav from "./Nav";
import Displaycontainer from "./Displaycontainer";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/me")
      .then((resp) => resp.json())
      .then(setCurrentUser)
  }, [])

  return (
    <div>
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Displaycontainer currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
