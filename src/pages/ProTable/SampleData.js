const columns = [
  {
    title: "area",
    key: "area",
    dataIndex: "area",
  },
  {
    title: "seek",
    key: "seek",
    dataIndex: "seek",
  },
];

const tableData = [...Array(20)].map((_, index) => ({
  area: `area${index}`,
  seek: `seek${index}`,
}));

export { tableData, columns };
