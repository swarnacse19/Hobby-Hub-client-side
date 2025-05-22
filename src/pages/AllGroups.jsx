import React from 'react';
import { useLoaderData } from 'react-router';
import Table from '../Components/Table';

function AllGroups() {
    const groups = useLoaderData();
    //console.log(groups);
  return (
    <div className='my-10'>
      <Table groups={groups}></Table>
    </div>
  );
}

export default AllGroups;