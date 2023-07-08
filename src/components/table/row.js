const TableRow = ({ data, numbering, index }) => {
    if (data == undefined) {
        return "loading ..."
    }
    
    return (
        <tr key={index} className="fs-7">

            <td>{numbering+=index}</td>
            
            {data.map((item, i) => {
                return (
                    <td key={i}>{item}</td>
                );
            })}
           
        </tr>
    );
};

export default TableRow
