import { PageHeaderWrapper } from "@ant-design/pro-layout";
// import { TableFilter } from "./tested/TableFilter";

import DynamicSearchTable from "./DynamicSearchTable";
import SearchTable from "./SearchTable";
export default () => {
  return (
    <PageHeaderWrapper>
      <DynamicSearchTable />
    </PageHeaderWrapper>
  );
};
