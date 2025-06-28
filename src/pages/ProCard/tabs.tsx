import React from "react";
import ProCard from "@ant-design/pro-card";

export default () => {
  return (
    <ProCard colSpan="50%" title="配置菜单" tabs={{}}>
      <ProCard.TabPane tab="默认尺寸" key="base">
        <ProCard title="默认尺寸" tooltip="这是提示" style={{ width: 300 }}>
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </ProCard>
      </ProCard.TabPane>
      <ProCard.TabPane tab="小尺寸卡片" key="small">
        <ProCard title="小尺寸卡片" tooltip="这是提示" style={{ width: 300 }} size="small">
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </ProCard>
      </ProCard.TabPane>
    </ProCard>
  );
};
