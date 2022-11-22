import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `URL("")`,
            backgroundPosition: "center center",
        }}
        >
        <div className="banner_contents">
           <h1 className="banner_title">
              Title
           </h1>
           <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
           </div>
           <h1 className="banner_description">
            Description
           </h1>
        </div>
        <div className="banner_fadebottom"></div>
    </header>

  )
}

export default Banner;