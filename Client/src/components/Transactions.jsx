import React from 'react'

function Transactions() {
  return (
    <div>
   
        <table className='border table-auto divide-y '>
            <thead className=' divide-x'>
                <th>
                    From
                </th>
                <th>
                    To
                </th>
                <th>
                    Amount
                </th>
                <th>
                    timestamp
                </th>
            </thead>
            <tbody>
                <tr className=' divide-x '>
                    <td>
                        1
                    </td>
                    <td>
                        2
                    </td>
                    <td>
                        3
                    </td>
                    <td>4</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Transactions