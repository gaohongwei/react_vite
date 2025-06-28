import React from "react";
import { Button, Tooltip, Dropdown, Menu, Input } from "antd";
import { EllipsisOutlined, QuestionCircleOutlined, SearchOutlined } from "@ant-design/icons";
import type { ProColumns } from "@ant-design/pro-table";
import ProTable, { TableDropdown } from "@ant-design/pro-table";

import { tableListDataSource, TableListItem, columns } from "../table_data";

const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

const SearchTable = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        layout: "vertical",
        defaultCollapsed: false,
      }}
      dateFormatter="string"
      toolbar={{
        title: "高级表格",
        tooltip: "这是一个标题提示",
      }}
      toolBarRender={() => [
        <Button key="danger" danger>
          危险按钮
        </Button>,
        <Button key="show">查看日志</Button>,
        <Button type="primary" key="primary">
          创建应用
        </Button>,
        <Dropdown key="menu" overlay={menu}>
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
    />
  );
};
export default SearchTable;
