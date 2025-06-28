import React from "react";
import { SlideShow } from "../pages/SlideShow";

import { TabView } from "../pages/ComView/TabView";

import { FlexObj } from "../pages/FlexObj";
import { Position } from "../pages/Position";
import { NavBar } from "../pages/NavBar";

const App = () => {
  const tabsConfig = [
    {
      label: "NavBar",
      child: <NavBar />,
    },

    {
      label: "SlideShow",
      child: <SlideShow />,
    },
    {
      label: "FlexObj",
      child: <FlexObj />,
    },
    {
      label: "Position",
      child: <Position />,
    },
  ];
  return <TabView tabs={tabsConfig} activeKey="NavBar" />;
};

export default App;
