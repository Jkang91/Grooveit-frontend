import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import "./Stylesheet.css";
// import { useDispatch } from 'react-redux';

function Login({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  // const dispatch = useDispatch();

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

  function responseGoogle(response) {
      if (response.tokenId) {
          axios.post("/login/google", null, {
              headers: {
                  Authorization: `Bearer ${response.tokenId}`
              },
          })
          .then((response) => {
              const { user, token } = response.data;
              localStorage.setItem("token", token);
              axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
              setCurrentUser(user);
              history.push("/");
          })
          .catch((error) => {
              setErrors(error.response.data.errors)
          });
      }
  }

  // const onSuccess = async (res) => {
  //   const result = res?.profileObj; // the question mark will not throw in an error if the object does not exist
  //   const token = res?.tokenId;

  //   try {
  //       dispatch({ type: 'AUTH', data: {result, token}});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const onFailure = async (res) => {
  //   console.log("Google Sign In was unsuccessful...")
  // };

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
      <GoogleLogin
        clientId="508845842404-1k8dvbsm3d6a33r9el9ndkvp8jbajlhd.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
