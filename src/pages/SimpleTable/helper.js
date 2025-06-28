function fCurPageData({ data, pageNo, pageSize }) {
  const startPos = (pageNo - 1) * pageSize;
  return data.slice(startPos, startPos + pageSize - 1);
}

function fGetPrev(curPage) {
  if (curPage > 1) return curPage - 1;
  return 1;
}

// const fGetNext = (len) => (curPage) => {
//   if (curPage < len - 1) return curPage + 1;
//   return len - 1;

// };
function fGetNext(curPage, len) {
  if (curPage < len) return curPage + 1;
  return len;
  // if (curPage > len - 2) return len - 1;
  // return curPage + 1;
}

function fSampleData(count = 20) {
  const tableColumns = [
    {
      header: "col1 header",
      name: "col1",
    },
    {
      header: "col2 header",
      name: "col2",
    },
  ];

  const tableData = [...Array(count)].fill(0).map((_, index) => ({
    col1: `col1-${index + 1}`,
    col2: `col2-${index + 1}`,
  }));
  return { tableColumns, tableData };
}
export { fCurPageData, fGetPrev, fGetNext, fSampleData };
