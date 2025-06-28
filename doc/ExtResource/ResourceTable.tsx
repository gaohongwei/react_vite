import React from "react";
import { Button, Tooltip, Dropdown, Menu, Input } from "antd";
import { EllipsisOutlined, QuestionCircleOutlined, SearchOutlined } from "@ant-design/icons";
import type { ProColumns } from "@ant-design/pro-table";
import ProTable, { TableDropdown } from "@ant-design/pro-table";
import { fStatus, fServiceType, fArea, fSubArea, fFakeData, fCreator } from "./helper";
const valueEnum = {
  0: "close",
  1: "running",
  2: "online",
  3: "error",
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  progress: number;
  money: number;
  memo: string;
};
const tableListDataSource = fFakeData();
console.log("tableListDataSource", tableListDataSource);
const columns: ProColumns<TableListItem>[] = [
  {
    title: "排序",
    dataIndex: "index",
    valueType: "indexBorder",
    width: 48,
  },
  {
    title: "供需？",
    dataIndex: "serviceType",
    width: "8%",
    initialValue: "close",
    filters: true,
    onFilter: true,
    valueEnum: fServiceType(),
  },
  {
    title: "领域",
    dataIndex: "area",
    width: "15%",
    filters: true,
    onFilter: true,
    valueEnum: fArea(),
  },
  {
    title: "描述",
    dataIndex: "desc",
    width: "30%",
    filters: true,
    onFilter: true,
    ellipsis: true,
    copyable: true,
    render: (_) => <a>{_}</a>,
    // 自定义筛选项功能具体实现请参考 https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input style={{ width: 188, marginBottom: 8, display: "block" }} />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
  },
  {
    title: "状态",
    dataIndex: "status",
    width: "8%",
    filters: true,
    onFilter: true,
    valueEnum: fStatus(),
  },
  {
    title: "联系人",
    dataIndex: "contact",
    width: "8%",
    hideInSearch: true,
    valueEnum: fCreator(),
  },
  {
    title: "创建者",
    dataIndex: "creator",
    width: "8%",
    hideInSearch: true,
    valueEnum: fCreator(),
  },
  {
    title: "操作",
    width: 180,
    key: "option",
    valueType: "option",
    render: () => [<a key="link">查看</a>],
  },
];

const ResourceTable = () => {
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
      dateFormatter="string"
      toolbar={{
        title: "资源对接",
        tooltip: "点击各列旁边的图标，可以筛选",
      }}
      search={{
        layout: "horizontal",
        defaultCollapsed: false,
      }}
    />
  );
};

export { ResourceTable };
