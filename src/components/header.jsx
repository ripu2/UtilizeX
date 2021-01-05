import React from "react";
import "../styles/app.scss";
const Header = ({ userName, userImage }) => {
  return (
    <>
      <div className="header">
        <h3 className="ui header">
          <img src={userImage} className="ui circular image" />
          Welcome {userName} !!
        </h3>
      </div>
    </>
  );
};
export default Header;
