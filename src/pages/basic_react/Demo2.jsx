import { useState, useEffect } from "react";
import { Form, Input, Select, Button } from "antd";
import "./Demo.css";

const onMouseDown = (event) => {
  console.log(event);
};

const onMouseUp = (event) => {
  console.log(event);
};

const fMouseDown = (varXY) => (event) => {
  console.log(varXY);
  console.log(event);
};

const Div = () => {
  const cssDiv = { width: 100, hight: 100, border: "5px" };
  return <div onMouseDown={onMouseDown} onMouseUp={onMouseUp} className="boarder"></div>;
};

const DivRow = ({ count }) => {
  let rowIndex = 0,
    colIndex = 0;

  const rows = [];
  const rowStyle = { display: "flex" };
  let varXY = "";
  while (rowIndex < count) {
    const row = [];
    while (colIndex < count) {
      varXY = [rowIndex, colIndex].join(",");
      row.push(
        <div data-xy={varXY} style={rowStyle}>
          <div onMouseDown={fMouseDown(varXY)} className="boarder"></div>
        </div>,
      );
      colIndex += 1;
    }
    rows.push(row);
    rowIndex += 1;
  }

  // let index = 0;
  // const divs = [];
  // while (index < count) {
  //   divs.push(<Div />);
  //   index += 1;
  // }

  // const rowStyle = { display: "flex" };
  // const rows = [];
  // index = 0;
  // while (index < count) {
  //   rows.push(<div style={style}>{divs}</div>);
  //   index += 1;
  // }
  return <div>{rows}</div>;
};
const DemoPage = () => {
  // A
  return (
    <>
      <DivRow count={10} />
    </>
  );
};

export { DemoPage };
