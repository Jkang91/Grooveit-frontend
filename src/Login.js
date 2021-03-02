import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setCurrentUser }) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleLogin(e) {
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then((data) => {
                if (data.errors) {
                    setErrors(data.errors)
                } else {
                    const { user, token } = data
                    localStorage.setItem("token", token)
                    setCurrentUser(user)
                    console.log(user)
                    history.push("/dance_videos")
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input name="username" type="text" value={formData.username} onChange={handleChange} />

                <label>Password</label>
                <input name="password" type="password" value={formData.password} onChange={handleChange} />
                {errors.map((error) => {
                    return <p style={{ color: "red" }} key={error}>{error}</p>;
                })}
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;