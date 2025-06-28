import "./style.css";
const TableHeader = ({ tableColumns = [] }) => {
  return (
    <tr className="header">
      {tableColumns.map((col) => {
        return <th>{col.header}</th>;
      })}
    </tr>
  );
};

const TableRow = ({ rowData, columns }) => {
  return (
    <tr>
      {columns.map((col) => (
        <td>{rowData[col]}</td>
      ))}
    </tr>
  );
};

const TableRows = ({ tableData = [], tableColumns = [] }) => {
  const columns = tableColumns.map((congfig) => congfig.name);
  return tableData.map((rowData) => (
    <TableRow rowData={rowData} columns={columns} />
  ));
};

export { TableHeader, TableRows };
