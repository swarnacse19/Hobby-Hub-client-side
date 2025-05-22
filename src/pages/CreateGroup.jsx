import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

function createGroup() {
  const { user } = use(AuthContext);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());
    newGroup.userName = user.displayName;
    newGroup.userEmail = user.email;
    console.log(newGroup);

    fetch("https://assignment-10-server-side-blue.vercel.app/groups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Group create successfully!",
            icon: "success",
            draggable: true,
          });

          //   form.reset()
        }
      });
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-200 rounded-2xl shadow-xl my-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Create a New Hobby Group
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label font-semibold">Group Name</label>
          <input
            type="text"
            name="groupName"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Hobby Category</label>
          <select
            name="hobbyCategory"
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
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Max Members</label>
          <input
            type="number"
            name="maxMembers"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Start Date</label>
          <input
            type="date"
            name="startDate"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            className="input input-bordered w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold">User Name</label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="input input-disabled w-full"
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">User Email</label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="input input-disabled w-full"
            />
          </div>
        </div>

        <div className="text-center pt-4">
          <button type="submit" className="btn btn-primary w-full">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default createGroup;
