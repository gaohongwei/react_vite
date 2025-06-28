import React from "react";
import "./styles.css";
const CssPage = () => {
  const ShowDom = (xyz) => <div>{xyz}</div>;

  return (
    <div>
      <div className="left">{ShowDom("left")}</div>
      <div className="center">{ShowDom("center")}</div>
      <div className="right">{ShowDom("right")}</div>
    </div>
  );
};

export { CssPage };
