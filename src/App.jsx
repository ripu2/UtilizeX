import React from "react";
import GoogleLogin from "react-google-login";
import "./styles/app.scss";
const App = () => {
  const responseGoogle = (res) => {
    console.log(res);
  };
  return (
    <>
      <div className="welcomeScreen">
        <h1>Please login Using your Google Account</h1>

        <div className="loginSegment">
          <GoogleLogin
            clientId="460583569223-akhumklklqcihdmh026lrk7g4l6qilt4.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </>
  );
};

export default App;
