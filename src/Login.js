import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { GoogleLogin } from "react-google-login";
// import { GoogleAPI, GoogleLogin, GoogleLogout } from "react-google-oauth";
import axios from "axios";
import "./Stylesheet.css";

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
      axios
        .post("/login/google", null, {
          headers: {
            Authorization: `Bearer ${response.tokenId}`,
          },
        })
        .then((response) => {
          const { user, token } = response.data;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setCurrentUser(user);
          history.push("/");
        })
        .catch((error) => {
          setErrors(error.response.data.errors);
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
  // responseGoogle = (response) => {
  //   var token = google_response.Zi;
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${google_response.Zi.accessToken}`,
  //       'Content-Type': 'application/json',
  //       'access_token': `${google_response.Zi.accessToken}`
  //     },
  //     body: JSON.stringify(token)
  //   }
  // }

  // return fetch(`backend rails api url to google sign in path`, requestOptions)
  // .then(response => {
  //   Cookie.set('accesstoken', response.headers.get('access-token'), {
  //     expires: 7
  //   });
  //   Cookie.set('client',response.headers.get('client'), {expires: 7});
  //   Cookie.set('tokentype',response.headers.get('token-type'), {expires: 7});
  //   Cookie.set('expiry',response.headers.get('expiry'), {expires: 7});
  //   Cookie.set('uid', response.headers.get('uid'),{expires: 7});
  // })

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
      {/* <GoogleAPI className="GoogleLogin" clientId="Your client API Key">
        <div>
          <GoogleLogin
            height="10"
            width="500px"
            backgroundColor="#4285f4"
            access="offline"
            scope="email profile"
            onLoginSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        </div>
      </GoogleAPI> */}
    </div>
  );
}

export default Login;
