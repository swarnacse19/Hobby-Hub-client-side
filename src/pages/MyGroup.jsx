import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router";
import MyData from "../Components/MyData";

function myGroup() {
  const { user } = use(AuthContext);
  const groups = useLoaderData();
  //console.log(groups);
  const userEmail = user.email;

  const [myGroup, setMyGroup] = useState([]);
  useEffect(() => {
    if (groups && userEmail) {
      const group = groups.filter((grp) => grp.userEmail === userEmail);
      setMyGroup(group);
    }
  }, [groups, userEmail]);
  console.log(myGroup);

  return (
    <div className="my-10">
        <div className="overflow-x-auto">
        <table className="table table-md">
    <thead>
      <tr className="bg-amber-200">
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
            myGroup.map(group => <MyData key={group._id} group={group}></MyData> )
        }
    </tbody>
    </table>
    </div>
    </div>
  );
}

export default myGroup;
