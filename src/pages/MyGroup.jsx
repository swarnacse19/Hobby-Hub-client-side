import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router";
import MyData from "../Components/MyData";
import Swal from "sweetalert2";

function MyGroup() {
  const { user } = useContext(AuthContext);
  const groups = useLoaderData();
  const [myGroup, setMyGroup] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userEmail = user.email;

  useEffect(() => {
    if (groups && userEmail) {
      const userGroups = groups.filter((grp) => grp.userEmail === userEmail);
      setMyGroup(userGroups);
    }
  }, [groups, userEmail]);

  const openModal = (group) => {
    setSelectedGroup(group);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGroup(null);
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());

    fetch(`https://assignment-10-server-side-blue.vercel.app/groups/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Group Updated successfully!",
            icon: "success",
          });
          const updatedGroup = { ...selectedGroup, ...newData };
          updatedGroup._id = id;

          setMyGroup((prev) =>
            prev.map((g) => (g._id === id ? updatedGroup : g))
          );
          closeModal();
        }
      });
  };

  const handleDelete = (id) => {
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
        fetch(
          `https://assignment-10-server-side-blue.vercel.app/groups/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success",
              });

              setMyGroup(myGroup.filter((g) => g._id !== id));
            }
          });
      }
    });
  };

  const hobbyOptions = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
    "Web Developing",
  ];

  return (
    <div className="my-10 text-black">
      <div className="overflow-x-auto">
        <table className="table table-md">
          <thead>
            <tr className="bg-black text-white">
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
            {myGroup.map((group) => (
              <MyData
                key={group._id}
                group={group}
                openModal={openModal}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedGroup && (
        <dialog open className="modal modal-open">
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <form
              onSubmit={(e) => handleUpdate(e, selectedGroup._id)}
              className="space-y-4"
            >
              <div className="form-control">
                <label className="label font-semibold">Group Name</label>
                <input
                  type="text"
                  name="groupName"
                  defaultValue={selectedGroup.groupName}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">Hobby Category</label>
                <select
                  name="hobbyCategory"
                  defaultValue={selectedGroup.hobbyCategory}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select a category</option>
                  {hobbyOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control">
                <label className="label font-semibold">Description</label>
                <textarea
                  name="description"
                  defaultValue={selectedGroup.description}
                  className="textarea textarea-bordered w-full"
                  rows={3}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">Meeting Location</label>
                <input
                  type="text"
                  name="meetingLocation"
                  defaultValue={selectedGroup.meetingLocation}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">Max Members</label>
                <input
                  type="number"
                  name="maxMembers"
                  defaultValue={selectedGroup.maxMembers}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  defaultValue={selectedGroup.startDate}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label font-semibold">Image URL</label>
                <input
                  type="url"
                  name="imageUrl"
                  defaultValue={selectedGroup.imageUrl}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label font-semibold">User Name</label>
                  <input
                    type="text"
                    value={selectedGroup.userName}
                    readOnly
                    className="input input-disabled w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label font-semibold">User Email</label>
                  <input
                    type="email"
                    value={selectedGroup.userEmail}
                    readOnly
                    className="input input-disabled w-full"
                  />
                </div>
              </div>

              <div className="text-center pt-4">
                <button type="submit" className="btn btn-primary w-full">
                  Update
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default MyGroup;
