const TableHeadItem = ({ item }) => {
    return (
        <>
            <th title={item} className="pl-2 pb-3 min-w-175px text-start">{item}</th>
        </>
    );
};

export default TableHeadItem
