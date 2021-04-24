import React from 'react';
import CatRow from './CatRow'
 
const CatTable = props => {
    return (
        <table className='CatTable'>
            <thead>
                <tr>
                    <td><h2>Make</h2></td>
                    <td className='tdSerial'><h2>Serial</h2></td>
                    <td><h2>Price</h2></td>
                </tr>
            </thead>
            <tbody>
                {props.cats.map(cat => <CatRow key={cat.id} cat={cat}/>)}
            </tbody>
        </table>
    );
}
 
export default CatTable;