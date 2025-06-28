import React, { useState } from "react";
import { useApi } from "./useApi";
import { Table, Button, Spin } from "antd";

const Customer = () => {
  const { loading, error, customer, refresh } = useApi();

  console.log("customer", customer);

  const columns = [
    {
      title: "splitId",
      dataIndex: "splitId",
      key: "splitId"
    }
  ];

  const onClick = async () => {
    refresh();
  };
  return (
    <div>
      {loading && <Spin />}
      <Button onClick={onClick}>Add</Button>
      <Table dataSource={customer} columns={columns} />
    </div>
  );
};

export default Customer;
