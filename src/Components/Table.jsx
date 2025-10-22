import React from 'react';
import Data from './Data';

function Table({groups}) {
    console.log(groups);
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table table-md">
    <thead>
      <tr className='bg-black text-white'>
        <th>Group Name</th>
        <th>Hobby Category</th>
        <th>Max members</th>
        <th>Meeting location</th>
        <th>Start Date</th>
        <th>Admin</th>
        <th>Button</th>
      </tr>
    </thead>
    <tbody>
        {
            groups.map(group => <Data key={group._id} group={group}></Data> )
        }
    </tbody>
  </table>
    </div>
    </div>
  );
}

export default Table;