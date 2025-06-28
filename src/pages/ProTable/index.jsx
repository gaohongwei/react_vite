import AdvTable from "@ant-design/pro-table";
// AdvTable = ProTable
import { tableData, columns } from "./SampleData";
const ProTable = () => {
  return (
    <AdvTable
      columns={columns}
      request={() => {
        return Promise.resolve({
          data: tableData,
          success: true,
        });
      }}
      params={{ seek: "abc" }}
      // editable={{
      //   type: "multiple",
      // }}
      // search={{
      //   defaultCollapsed: false,
      //   span: 12,
      //   labelWidth: "auto",
      // }}
      // rowKey="key"
      // headerTitle="样式类"
    />
  );
};

export { ProTable };
