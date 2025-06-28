import React from "react";
import { SlideShow } from "../pages/SlideShow";

import { TabView } from "../pages/ComView/TabView";

import { FlexObj } from "../pages/FlexObj";
import { Position } from "../pages/Position";
import { Customer } from "../pages/Customer";
import { ProTable } from "../pages/ProTable";

const Main = () => {
  const tabsConfig = [
    {
      label: "ProTable",
      child: <ProTable />,
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
    {
      label: "Customer",
      child: <Customer />,
    },
  ];
  return <TabView tabs={tabsConfig} activeKey="Position" />;
};

export { Main };
