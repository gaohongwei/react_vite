/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { PlusOutlined, QuestionOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";

import ProTable from "@ant-design/pro-table";
import { columns } from "./columns.tsx";

const DynamicSearchTable = () => {
  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      request={async () => {
        return {
          data: [
            {
              key: 1,
              name: `TradeCode ${1}`,
              createdAt: 1602572994055,
              state: "closed",
            },
          ],
          success: true,
        };
      }}
      rowKey="key"
      tableLayout="fixed"
      dateFormatter="string"
      headerTitle="动态自定义搜索栏"
      search={{
        defaultCollapsed: false,
        optionRender: ({ searchText, resetText }, { form }) => [
          <Button
            key="search"
            type="primary"
            onClick={() => {
              form?.submit();
            }}
          >
            {searchText}
          </Button>,
          <Button
            key="rest"
            onClick={() => {
              form?.resetFields();
            }}
          >
            {resetText}
          </Button>,
          <Button key="out">导出</Button>,
          <Button key="help">帮助</Button>,
        ],
      }}
      toolBarRender={() => [
        <Button key="4" type="primary">
          <QuestionOutlined />
          帮助
        </Button>,
        <Button key="3" type="primary">
          <PlusOutlined />
          新建
        </Button>,
      ]}
    />
  );
};

export default DynamicSearchTable;
