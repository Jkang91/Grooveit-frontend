import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
// import { GoogleLogin, responseGoogle } from "react-google-login";
import "./Stylesheet.css";

function Login({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_RAILS_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          const { user, token } = data;
          localStorage.setItem("token", token);
          setCurrentUser(user);
          console.log(user);
          history.push("/dance_videos");
        }
      });
  }

  return (
    <div className="login">
      <Form onSubmit={handleLogin}>
        <Form.Field>
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.map((error) => {
            return (
              <p style={{ color: "red" }} key={error}>
                {error}
              </p>
            );
          })}
        </Form.Field>
        <Button type="submit" content="Login" />
      </Form>
      {/* <GoogleLogin
        clientId="508845842404-1k8dvbsm3d6a33r9el9ndkvp8jbajlhd.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      /> */}
    </div>
  );
}

export default Login;
