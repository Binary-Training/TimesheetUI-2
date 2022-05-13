import Tables from "./index";
import resourcedetail from "./data/resourcedetail"
const Table2 = () => {
    const { columns, rows } = resourcedetail();
  return (
    <>
      <Tables columns={columns} rows={rows} />
    </>
  );
};

export default Table2;
