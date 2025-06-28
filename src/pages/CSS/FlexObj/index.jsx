import { TabView } from "../../ComView/TabView";
import { FlexBasic } from "./FlexBasic";
import { FlexNav } from "./FlexNav";
import { FlexMobile } from "./FlexMobile";
import { SideBar } from "./SideBar";

const FlexObj = () => {
  const tabsConfig = [
    {
      label: "SideBar",
      child: <SideBar />
    },
    {
      label: "FlexBasic",
      child: <FlexBasic />
    },
    {
      label: "FlexMobile",
      child: <FlexMobile />
    },
    {
      label: "FlexNav",
      child: <FlexNav />
    }
  ];
  return <TabView tabs={tabsConfig} level={2} />;
};

export default FlexObj;
