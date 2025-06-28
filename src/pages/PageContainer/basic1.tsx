import { Button } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
const MyPage = ({ children }) => {
  return (
    <PageContainer
      content="欢迎使用 ProLayout 组件"
      tabList={[
        {
          tab: "基本信息",
          key: "base",
        },
        {
          tab: "详细信息",
          key: "info",
        },
      ]}
      extra={[
        <Button key="3">操作3</Button>,
        <Button key="2">操作2</Button>,
        <Button key="1" type="primary">
          主操作
        </Button>,
      ]}
      footer={[
        <Button key="rest">重置</Button>,
        <Button key="submit" type="primary">
          提交
        </Button>,
      ]}
    >
      {children}
    </PageContainer>
  );
};

export default MyPage;
