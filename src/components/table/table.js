import TableHeadItem from "./head";
import TableRow from "./row";

const Table = ({ thead_data, tbody_data, page, limit }) => {
  if (thead_data == undefined || tbody_data == undefined) {
    return (
     <div>loading...</div>
    );
  }

  let numberings = page * limit - limit;

  return (
    <div className="table-responsive">
      <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
        <thead>
          <tr className="fs-7 fw-bold text-gray-400 border-bottom-2">
            <th className="p-0 pb-3 min-w-50px text-start"> No </th>
            {thead_data.map((h) => {
              return <TableHeadItem key={h} item={h} />;
            })}
          </tr>
        </thead>
        <tbody>
          {tbody_data.map((item, i) => {
            return (
              <TableRow
                key={i}
                data={item.items}
                numbering={numberings}
                page={page}
                limit={limit}
                index={i + 1}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
