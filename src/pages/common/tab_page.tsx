import { Tabs } from "antd";
import ProField from "@ant-design/pro-field";
import ProCard from "@ant-design/pro-card";

const ShowJson = ({ json, title }) => {
  return (
    <div>
      <ProCard title={title} headerBordered collapsible>
        <ProField
          fieldProps={{
            style: {
              width: "100%",
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(json)}
        />
      </ProCard>
    </div>
  );
};

const { TabPane } = Tabs;
const TabPage = ({ pages: orgPages, title, summary, defaultActiveKey = "1" }) => {
  const SummaryView = () => {
    return <ShowJson json={summary} title={title} />;
  };

  const pages = { SummaryView, ...orgPages };
  const keys = Object.keys(pages);
  return (
    <>
      <p>{title}</p>
      <Tabs defaultActiveKey={defaultActiveKey}>
        {keys.map((key, index) => {
          const COMP = pages[key];
          return (
            <TabPane tab={key} key={key}>
              <COMP />
            </TabPane>
          );
        })}
      </Tabs>
    </>
  );
};
export { TabPage };
