import React from 'react';
import { Link } from 'react-router';

function MyData({group}) {
    const {userName, startDate, meetingLocation, maxMembers, 
hobbyCategory, groupName
} = group;
//console.log(userName, startDate, meetingLocation, maxMembers, 
//hobbyCategory, groupName);
  return (
    <tr>
        <td>{groupName}</td>
        <td>{hobbyCategory}</td>
        <td>{maxMembers}</td>
        <td>{meetingLocation}</td>
        <td>{startDate}</td>
        <td>{userName}</td>
        <td className='flex gap-2'><Link className='btn'>Update</Link>
        <Link className='btn'>Delete</Link></td>
    </tr>
  );
}

export default MyData;