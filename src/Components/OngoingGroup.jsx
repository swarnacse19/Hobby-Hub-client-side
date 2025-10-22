import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

function Ongoing() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-side-blue.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => {
        const today = dayjs();
        const ongoingGroups = data
          .filter(group => dayjs(group.startDate).isAfter(today))
          .slice(0, 6);
        setGroups(ongoingGroups);
      });
  }, []);

  return (
    <div className="mx-auto px-4 max-w-7xl my-40">
      <h2 className="text-3xl text-pink-700 font-bold mb-16 text-center"> Ongoing Groups</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(group => (
          <div key={group._id} className="shadow-md hover:shadow-xl transition-all">
            <figure><img src={group.imageUrl} alt={group.groupName} className="h-48 w-full object-cover" /></figure>
            <div className="card-body">
              <h3 className="card-title text-xl">{group.groupName}</h3>
              <p className="text-sm text-gray-600 italic">{group.hobbyCategory}</p>
              <p className="line-clamp-3">{group.description}</p>
              <div className="mt-2 text-sm">
                <p><strong>Start:</strong> {dayjs(group.startDate).format('MMM D, YYYY')}</p>
                <p><strong>Location:</strong> {group.meetingLocation}</p>
              </div>
              <div className="card-actions mt-4 justify-end">
                <a href={`/group/${group._id}`}>
                  <button className="btn btn-outline btn-sm">View Details</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ongoing;
