import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
        <img
        className="header_logo"
        src="data:image/png;base64,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"
        />
        <img
        className="header_userIcon"
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fih0.redbubble.net%2Fimage.618427277.3222%2Fflat%2C1000x1000%2C075%2Cf.u2.jpg&imgrefurl=https%3A%2F%2Fwww.redbubble.com%2Fpeople%2Fnorbert-sloth%2Fworks%2F33253222-netflix-smileu-profile-icon&tbnid=uqgMgh7qzLVldM&vet=12ahUKEwjG2IfCnr37AhW6hNgFHW5dDp4QMygSegUIARCHAg..i&docid=mvYGLQkipCMw2M&w=1000&h=1000&q=netfilx%20profile%20picture&ved=2ahUKEwjG2IfCnr37AhW6hNgFHW5dDp4QMygSegUIARCHAg"
        />
         
        
    
    </div>
  )
}

export default Header;