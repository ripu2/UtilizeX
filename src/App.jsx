import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Header from "./components/header";
import Orders from "./components/orderList";
import "./styles/app.scss";
const App = () => {
  const [userName, setUserName] = useState("Guest!!");
  const [userProfile, setUserProfile] = useState(
    "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
  );
  const responseGoogle = (res) => {
    console.log(res);
    setUserName(res.profileObj.name);
    setUserProfile(res.profileObj.imageUrl);
  };
  const data =
    userName === "Guest!!" ? (
      <>
        <Header userName={userName} userImage={userProfile} />
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
    ) : (
      <>
        <div className="orderList">
          <Header userName={userName} userImage={userProfile} />
          <Orders />
        </div>
      </>
    );
  return <>{data}</>;
};

export default App;
