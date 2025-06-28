import React, { useEffect, useState } from "react";
import { Tabs, Typography } from "antd";
import { LinkOutlined } from "@ant-design/icons";
// import "./style.css";
const i18f = (label, ...rest) => label;
const PContainer = ({ title, subTitle, children }) => (
  <div>
    <h3>{title}</h3>
    <h4>{subTitle}</h4>
    {children}
  </div>
);

const { TabPane } = Tabs;
const { Text } = Typography;
const fGetStyle = (level) => {
  const type = level === 1 ? "line" : "line";
  return { size: "large", type };
};
const fText = ({ label, level }) => {
  const fontType = level === 1 ? undefined : "success";

  return <Text type={fontType}>{i18f(label, "action")}</Text>;
};
const TabView = ({
  activeKey: defaultKey,
  tabs,
  tabTitle,
  subTitle,
  level = 1,
}) => {
  const filteredTabs = tabs;
  //.filter((item) => item.visible);
  const [activeKey, setActiveTab] = useState(defaultKey);
  const onChange = (value) => setActiveTab(value);
  useEffect(() => setActiveTab(defaultKey), [defaultKey]);

  const content = (
    <div className="level-one">
      <Tabs
        defaultActiveKey={defaultKey}
        activeKey={activeKey}
        onChange={onChange}
        {...fGetStyle(level)}
        tabBarStyle={{ colot: "green" }}
      >
        {filteredTabs.map((tab) => {
          const { label, child, href } = tab;
          if (child) {
            // data-test not supported now
            return (
              <TabPane
                tab={fText({ label, level })}
                key={label}
                data-test={label}
              >
                {child}
              </TabPane>
            );
          } else if (href) {
            // @ts-ignore
            const link = (
              <a href={href}>
                {i18f(label, "action")}
                <LinkOutlined />
              </a>
            );
            return <TabPane tab={link} key={label} data-test={label}></TabPane>;
          } else {
            return null;
          }
        })}
      </Tabs>
    </div>
  );
  if (!tabTitle) return content;
  return (
    <PContainer title={tabTitle} subTitle={subTitle}>
      {content}
    </PContainer>
  );
};

export { TabView };
