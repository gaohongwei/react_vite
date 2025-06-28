import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Menu, Space, Table } from "antd";
import React from "react";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: "Action 1"
      },
      {
        key: "2",
        label: "Action 2"
      }
    ]}
  />
);
const App = () => {
  const expandedRowRender = (record, index) => {
    const columns = [
      {
        title: "Date",
        dataIndex: "date",
        key: "date"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Status",
        key: "state",
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        )
      },
      {
        title: "Row Index",
        dataIndex: "rowIndex",
        key: "rowIndex"
      },
      {
        title: "Action",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        )
      }
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: "2014-12-24 23:12:00",
        name: record.name,
        rowIndex: index
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Platform",
      dataIndex: "platform",
      key: "platform"
    },
    {
      title: "Version",
      dataIndex: "version",
      key: "version"
    },
    {
      title: "Upgraded",
      dataIndex: "upgradeNum",
      key: "upgradeNum"
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator"
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt"
    },
    {
      title: "Action",
      key: "operation",
      render: () => <a>Publish</a>
    }
  ];
  const dataSource = [];
  for (let i = 0; i < 3; ++i) {
    dataSource.push({
      key: i.toString(),
      name: `Screem${i}`,
      platform: `platform${i}`,
      version: "10.3.4.5654",
      upgradeNum: 500,
      creator: "Jack",
      createdAt: "2014-12-24 23:12:00"
    });
  }
  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"]
        }}
        dataSource={dataSource}
      />
    </>
  );
};
export default App;
