import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { LightFilter, ProFormDatePicker } from "@ant-design/pro-form";
import { EllipsisOutlined, DownOutlined, PlusOutlined } from "@ant-design/icons";
import ProTable from "@ant-design/pro-table";
import { tableListDataSource, TableListItem, columns } from "../table_data";

const menu = {
  type: "dropdown",
  items: [
    {
      label: "全部事项",
      key: "all",
    },
    {
      label: "已办事项",
      key: "done",
    },
  ],
  onChange: (activeKey) => {
    console.log("activeKey", activeKey);
  },
};

const filter = (
  <LightFilter>
    <ProFormDatePicker name="startdate" label="响应日期" />
  </LightFilter>
);

const actions = [
  <Dropdown
    key="overlay"
    overlay={
      <Menu onClick={() => alert("menu click")}>
        <Menu.Item key="1">菜单</Menu.Item>
        <Menu.Item key="2">列表</Menu.Item>
        <Menu.Item key="3">表单</Menu.Item>
      </Menu>
    }
  >
    <Button>
      移动自
      <DownOutlined
        style={{
          marginLeft: 8,
        }}
      />
    </Button>
  </Dropdown>,
  <Button
    key="primary"
    type="primary"
    onClick={() => {
      alert("add");
    }}
  >
    添加
  </Button>,
];

const search1 = {
  onSearch: (value) => alert(value),
};

const search = {
  defaultCollapsed: false,
  labelWidth: "auto",
  optionRender: ({ searchText, resetText }, { form }) => {
    return [
      <Button
        key="searchText"
        type="primary"
        onClick={() => {
          form?.submit();
        }}
      >
        {searchText}
      </Button>,
      <Button
        key="resetText"
        onClick={() => {
          form?.resetFields();
        }}
      >
        {resetText}
      </Button>,
      <Button key="out">导出</Button>,
    ];
  },
};

const tabs = {
  items: [
    {
      key: "tab1",
      tab: "标签一",
    },
    {
      key: "tab2",
      tab: "标签二",
    },
  ],
};
const toolbar = {
  title: "标签",
  subTitle: "这里是子标题",
  tooltip: "这是一个段描述",
  multipleLine: true,
  tabs: tabs,
  // search: search,
  filter: filter,
  actions: actions,
  menu: menu,
};
const toolBarRender = () => [
  <Button key="show">查看日志2</Button>,
  <Button key="primary" type="primary">
    <PlusOutlined />
    创建应用
  </Button>,
];

const request = (params, sorter, filter) => {
  // 表单搜索项会从 params 传入，传递给后端接口。
  console.log(params, sorter, filter);
  return Promise.resolve({
    data: tableListDataSource,
    success: true,
  });
};

export default () => {
  return (
    <ProTable<TableListItem>
      search={search}
      // search={false}
      columns={columns}
      request={request}
      toolbar={toolbar}
      // toolBarRender={toolBarRender}
      rowKey="key"
    />
  );
};
