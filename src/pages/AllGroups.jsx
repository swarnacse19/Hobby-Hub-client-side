import React from "react";
import { useLoaderData } from "react-router";
import Table from "../Components/Table";
import { Helmet } from "react-helmet-async";

function AllGroups() {
  const groups = useLoaderData();
  //console.log(groups);
  return (
    <div>
      <Helmet>
        <title>All Groups</title>
      </Helmet>
      <div className="my-10">
        <Table groups={groups}></Table>
      </div>
    </div>
  );
}

export default AllGroups;
