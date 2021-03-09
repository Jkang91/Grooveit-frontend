import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signup({ setCurrentUser }) {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState([])

    const history = useHistory()

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function handleSignup(e){
        e.preventDefault()
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then((data) => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                const { user, token } = data;
                localStorage.setItem("token", token)
                setCurrentUser(user)
                console.log(user)
                history.push("/dance_videos")
            }
        })
    }


    return (
        <div>
            <form onSubmit={handleSignup} >
                <h2>Sign up</h2>
                <label>Name</label>
                <input name="name" type="text" value={formData.name} onChange={handleChange} />

                <label>Username</label>
                <input name="username" type="text" value={formData.username} onChange={handleChange} />

                <label>Password</label>
                <input name="password" type="password" value={formData.password} onChange={handleChange} />

                <input type="submit" value="Signup"/>
            </form>
        </div>
    )
}

export default Signup;