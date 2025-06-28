import React from "react";
import aiImage from "./ai.webp";
import "./style.css";

function Image() {
  return (
    <div className="container">
      <img src={aiImage} alt="img" />
      <p>
        According to caniuse, currently 79.2% of browsers support the WebP image
        format. That would include Chrome, Firefox, and Edge. Safari will
        support WebP in version 14, which is expected to be released in
        September 2020.
      </p>
    </div>
  );
}

export default Image;
