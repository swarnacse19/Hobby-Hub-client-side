import React from "react";

function MyData({ group, openModal, handleDelete }) {
  const {
    _id,
    groupName,
    hobbyCategory,
    maxMembers,
    meetingLocation,
    startDate,
    userName,
  } = group;

  return (
    <tr className="border-t border-neutral-400">
      <td className="font-semibold">{groupName}</td>
      <td>{hobbyCategory}</td>
      <td>{maxMembers}</td>
      <td>{meetingLocation}</td>
      <td>{startDate}</td>
      <td>{userName}</td>
      <td className="flex gap-2">
        <button className="btn text-green-500" onClick={() => openModal(group)}>
          Update
        </button>
        <button onClick={() => handleDelete(_id)} className="btn text-red-500">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default MyData;
