const TableRow = ({ row = {}, columns = [] }) => {
  return (
    <tr>
      {columns.map((key) => {
        <td>row[key]</td>;
      })}
    </tr>
  );
};

const TableHeader = ({ columns = [] }) => {
  return (
    <tr>
      {columns.map((key) => {
        <td>key</td>;
      })}
    </tr>
  );
};

function getColumns(rows) {
  let keys = [];
  for (const row of rows) {
    const rowKeys = Object.keys(row);
    keys = [...keys, ...rowKeys];
  }
  return keys;
}
const Table = ({ rows }) => {
  if (rows.length < 1) return <div>No data</div>;
  const keys = getColumns(rows);
  return (
    <table>
      <TableHeader columns={keys} />
      {rows.map((row) => (
        <TableRow row={row} columns={keys} />
      ))}
    </table>
  );
};

export { Table };
