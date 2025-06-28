import React from "react";
import { useState } from "react";
import { useApi } from "./useApi";
import "./style.css";

const SlideShowBasic = ({ images }) => {
  const [index, setIndex] = useState(0);
  const len = images.length;

  function getNext(index) {
    if (index >= len - 1) return 0;
    return index + 1;
  }

  function getPrev(index) {
    if (index < 1) return len - 1;
    return index - 1;
  }

  const onNext = () => setIndex((index) => getNext(index));
  const onPrev = () => setIndex((index) => getPrev(index));

  return (
    <div className="container">
      <img className="img-size" src={images[index]} alt="Any" />
      <div className="row">
        <button onClick={onNext}>Next</button>
        <button onClick={onPrev}>Prev</button>
      </div>
    </div>
  );
};

const SlideShow = () => {
  const { images, errors } = useApi();
  console.log("errors", errors);
  if (errors) return <div>Errors</div>;
  return <SlideShowBasic images={images} />;
};

export default SlideShow;
