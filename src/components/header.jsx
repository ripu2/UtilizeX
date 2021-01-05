import React from "react";
import "../styles/app.scss";
const Header = ({ userName, userImage }) => {
  return (
    <>
      <div className="header">
        <h3 className="ui header">
          <img
            src={userImage}
            className="ui circular image"
            alt="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
          />
          Welcome {userName} !!
        </h3>
      </div>
    </>
  );
};
export default Header;
