import React from "react";
function Tip({ data }) {
    return (
        <div className='tip'>
            <div >
                <h2 className="custom1">Calculate tip and Customer</h2>
<table style={{width:'1048px'}}>
                <tr>
                    <th >Total Customer</th>

                    <th>Tip</th>
                </tr>
                <tr>
                    <td className="custom"><b>{data.length}</b></td>
                    <td className="custom"><b>{data.reduce((amount, item) => 
                    item.percentage + amount, 0)}</b></td>

                </tr>
                </table>
            </div>
        </div>
    )
}
export default Tip;