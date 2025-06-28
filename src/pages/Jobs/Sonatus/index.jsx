import React, { useState } from "react";
import ReactDOM from "react-dom";
import data from "./Data";
import "./Tryme.css";

// https://coderbyte.com/editor/sharing:EGPv0Euc

const descMap = {
  allCount: "TOTAL RECEIPS",
  activeCount: "ACTIVE RECEIPS",
  archivedCount: "ARCHIVED RECEIPS",
  issuesCount: "RECEIPS ISSUES",
};
function Tabs({ overallStats }) {
  const keys = Object.keys(overallStats);
  const [activeKey, setActiveKey] = useState(keys[0]);

  return (
    <div className="tabContainer">
      {keys.map((key) => {
        const className =
          activeKey === key ? "tabbedContainer active" : "tabbedContainer";
        return (
          <div className={className} onClick={() => setActiveKey(key)}>
            <div key={key} className={`tabCount ${key}`}>
              {overallStats[key]}
            </div>
            <div className="tabText">{descMap[key]}</div>
          </div>
        );
      })}
    </div>
  );
}
function App() {
  return <Tabs overallStats={data.overallStats} />;
}

export default App;
