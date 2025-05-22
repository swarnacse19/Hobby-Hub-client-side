import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

function MyData({ group }) {
  const {
    _id,
    userName,
    startDate,
    meetingLocation,
    maxMembers,
    hobbyCategory,
    groupName,
  } = group;
  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/groups/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  // console.log(userName, startDate, meetingLocation, maxMembers,
  // hobbyCategory, groupName, _id);
  return (
    <tr className="border-t border-neutral-400">
      <td className="font-semibold">{groupName}</td>
      <td>{hobbyCategory}</td>
      <td>{maxMembers}</td>
      <td>{meetingLocation}</td>
      <td>{startDate}</td>
      <td>{userName}</td>
      <td className="flex gap-2">
        <button className="btn text-green-500">Update</button>
        <button onClick={() => handleDelete(_id)} className="btn text-red-500">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default MyData;
