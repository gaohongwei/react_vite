import React from "react";
import { Button, Space, Table, message } from "antd";
import ProTable from "@ant-design/pro-table";
import { tableListDataSource, TableListItem, columns } from "../table_data";

const TableBatchAction = () => {
  const onBatchAction = (rows) => () => {
    console.log("Selected rows", rows);
  };

  const onClick = ({ action }) => {
    console.log("action", action);
  };
  const toolBarRender = (_, { selectedRowKeys }) => {
    if (!selectedRowKeys || selectedRowKeys.length < 1)
      return (
        <Button key="3" type="primary" onClick={() => message.info("Please select some items")}>
          Batch Select
        </Button>
      );
  };
  return (
    <ProTable<TableListItem>
      columns={columns}
      rowSelection={{
        // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
        // 注释该行则默认不显示下拉选项
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
      }}
      tableAlertRender={({ selectedRowKeys, selectedRows, onCleanSelected }) => (
        <Space size={24}>
          <span>
            已选 {selectedRowKeys.length} 项
            <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
              取消选择
            </a>
          </span>
        </Space>
      )}
      tableAlertOptionRender={({ selectedRowKeys, selectedRows, onCleanSelected }) => {
        return (
          <Space size={16}>
            <Button onClick={onBatchAction(selectedRowKeys)}>
              <a>批量删除</a>
            </Button>
          </Space>
        );
      }}
      dataSource={tableListDataSource}
      scroll={{ x: 1300 }}
      options={false}
      search={false}
      rowKey="key"
      headerTitle="批量操作"
      toolBarRender={toolBarRender}
    />
  );
};

export default TableBatchAction;
