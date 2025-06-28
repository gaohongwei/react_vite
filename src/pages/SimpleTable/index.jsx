import React, { useState } from "react";
import { TableHeader, TableRows } from "./TableComp";
import { fCurPageData, fGetPrev, fGetNext, fSampleData } from "./helper";
const PageSize = 10;

const SimpleTable = ({ tableData, tableColumns }) => {
  const [curPage, setCurPage] = useState(1);
  const curData = fCurPageData({
    data: tableData,
    pageNo: curPage,
    pageSize: PageSize,
  });
  const pageCount = Math.ceil(tableData.length / PageSize);
  const onPrev = () => setCurPage(fGetPrev(curPage));
  const onNext = () => setCurPage(fGetNext(curPage, pageCount));
  return (
    <div>
      <TableHeader tableColumns={tableColumns} />
      <TableRows tableColumns={tableColumns} tableData={curData} />
      <button onClick={onPrev}>Prev</button>
      Curent Page: {curPage}/{pageCount}
      <button onClick={onNext}>Next</button>
    </div>
  );
};

const SampleTable = () => {
  const { tableColumns, tableData } = fSampleData(50);
  return <SimpleTable tableData={tableData} tableColumns={tableColumns} />;
};
export { SampleTable };
