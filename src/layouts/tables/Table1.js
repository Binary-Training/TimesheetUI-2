import Tables from "./index";
import approvebyresource from "./data/approvebyresource";
const Table1 = () => {
    const { columns, rows } = approvebyresource();
  return (
    <>
      <Tables columns={columns} rows={rows} />
    </>
  );
};

export default Table1;