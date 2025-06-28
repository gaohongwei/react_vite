import React, { useState } from "react";
import { isString, isObject } from "lodash";

import AppMenuConfig from "@/App/config/AppMenuConfig";


function ReactJson() {
  return <pre>{}JSON.stringify(AppMenuConfig, null,2)</pre>

}

function StringifyJson() {
  return <pre>{JSON.stringify(AppMenuConfig, null, 2)}</pre>;
}

// Own implementation
const RenderPlainData = ({ keyStr = "abc", valueStr }) => {
  return <div>{` ${keyStr}:${valueStr}`}</div>;
};

// http://jsonviewer.stack.hu/
const RenderDictData = ({ keyStr = "abc", value, collapseState = {} }) => {
  const [open, setOpen] = useState(collapseState[keyStr]);
  const onClick = () =>
    setOpen({
      ...collapseState,
      [keyStr]: !open
    });
  return (
    <span>
      <span onClick={onClick}>
        <span>Objkey:{keyStr}</span>
        <span>+</span>
      </span>

      {open && <JsonViewer dict={value} />}
    </span>
  );
};

const JsonViewer = ({ dict = {} }) => {
  const [collapseState, setCollapseState] = useState({});
  const keys = Object.keys(dict);
  const doms = [];
  for (const key of keys) {
    const value = dict[key];

    if (Array.isArray(value)) {
      console.log("Array");
    } else if (isObject(value)) {
      console.log("Object");
      const domObj = (
        <RenderDictData
          keyStr={key}
          value={value}
          collapseState={collapseState}
        />
      );
      doms.push(domObj);
    } else {
      doms.push(<RenderPlainData keyStr={key} valueStr={value} />);
    }
    // if (isString(value)) {
    //   doms.push(<RenderPlainData keyStr={key} valueStr={value} />);
    // } else if (isObject(value)) {
    //   console.log("abc");
    // }
  }
  return <div>{doms}</div>;
};

const JsonViewerSample = () => {
  const dictData = {
    bool: true,
    num: 1,
    str: "hi",
    arr: [false, 0, "bye"],
    obj: {
      nestedBool: true,
      nestedNum: 10,
      nestedStr: "hi again",
      nestedArr: ["INCONCEIVABLE", "NO WAI!!1!one"]
    }
  };

  return <JsonViewer dict={dictData} />;
};

export { ReactJson, StringifyJson, JsonViewerSample };
