import { Tabs } from "antd";
import { CommonTabs } from "COM/CommonTabs";
import "./styles.css";
import { InfiniteLoading } from "./InfiniteLoading";
import { CssPage } from "./CssPage";
import { DemoPage } from "./Demo";
import { CountryPage } from "./CountryPage";
const tabConfig = [
  // {
  //   name: "CssPage",
  //   child: <CssPage />,
  // },
  // {
  //   name: "InfiniteLoading",
  //   child: <InfiniteLoading />,
  // },
  {
    name: "CountryPage",
    child: <CountryPage />,
  },
  {
    name: "DemoPage",
    child: <DemoPage />,
  },
];

const { TabPane } = Tabs;
const BasicReact = () => {
  return <CommonTabs tabConfig={tabConfig} />;
};

export default BasicReact;
