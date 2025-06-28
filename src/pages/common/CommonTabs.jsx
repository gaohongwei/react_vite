import { Tabs } from "antd";

const { TabPane } = Tabs;
const CommonTabs = ({ tabConfig }) => {
  return (
    <Tabs>
      {tabConfig.map((item) => {
        const Page = item.child;
        return (
          <TabPane tab={item.name} key={item.name}>
            {Page}
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export { CommonTabs };
