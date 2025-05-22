import React from 'react';
import { Link } from 'react-router';

function Data({group}) {
    const {userName, startDate, meetingLocation, maxMembers, 
hobbyCategory, groupName, _id
} = group;
//console.log(userName, startDate, meetingLocation, maxMembers, 
//hobbyCategory, groupName);
  return (
    <tr className='border-t border-neutral-400 text-black'>
        <td className='font-semibold'>{groupName}</td>
        <td>{hobbyCategory}</td>
        <td>{maxMembers}</td>
        <td>{meetingLocation}</td>
        <td>{startDate}</td>
        <td>{userName}</td>
        <td><Link to={`/group/${_id}`} className='btn'>see more</Link></td>
    </tr>
  );
}

export default Data;