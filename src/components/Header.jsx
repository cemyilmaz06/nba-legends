import nbaLogo from "../assets/nba-logo.png"
import React from 'react';
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={nbaLogo} alt="" />
      </div>
      <div ><h1 className="baslik">NBA LEGENDS</h1></div>
   
    </div>
  );
};
export default Header;
