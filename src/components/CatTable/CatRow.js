import React from 'react';
 
const CatRow = props => {
    return (
        <tr>
            <td className='tdMake'>{props.cat.make}</td>
            <td className='tdSerial'>{props.cat.serial}</td>
            <td className='tdPrice'>${props.cat.price}</td>
        </tr>
    );
}
 
export default CatRow;