import React from "react";
import './background.css';
import image from '../../assets/dddragons-blur.jpg';


const BackgroundImagePage = () => {
  return (
      <div className="bg"><img className="logo" src={image} alt=""/></div>
  );
}

export default BackgroundImagePage;