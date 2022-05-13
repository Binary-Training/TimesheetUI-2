import Tables from "./index";
import resourceweeklydetail from "./data/resourceweeklydetail"
const Table3 = () => {
    const { columns, rows } = resourceweeklydetail();
  return (
    <>
      <Tables columns={columns} rows={rows} />
    </>
  );
};

export default Table3;
