import { useEffect } from "react";
import { Tabs } from "antd";
import useQueryString from "./useQueryString";
// https://codesandbox.io/embed/boring-butterfly-pvmi9?fontsize=14

const { TabPane } = Tabs;
function UrlPath() {
  const [value, onSetValue] = useQueryString("water");

  return (
    <div className="App">
      <h1>Tabs and query string example</h1>
      <Tabs defaultActiveKey={value} onChange={onSetValue}>
        <TabPane tab="water" title="Water" key="water">
          Water
        </TabPane>
        <TabPane tab="coffe" title="Coffe" key="coffe">
          Coffe
        </TabPane>
        <TabPane tab="tea" title="Tea" key="tea">
          Tea
        </TabPane>
      </Tabs>
    </div>
  );
}

export default UrlPath;
