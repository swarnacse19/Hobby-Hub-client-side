import React from 'react';
import { useLoaderData } from 'react-router';
import dayjs from 'dayjs';

function GroupDetails() {
  const group = useLoaderData();
  const {
    userName,
    userEmail,
    startDate,
    meetingLocation,
    maxMembers,
    hobbyCategory,
    groupName,
    imageUrl,
    description
  } = group;

  const today = dayjs();
  const groupStartDate = dayjs(startDate);
  const isActive = groupStartDate.isAfter(today);

  return (
    <div className="max-w-4xl mx-auto p-6 text-black">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img src={imageUrl} alt={groupName} className="object-cover w-full h-full" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl font-bold">{groupName}</h2>
          <p className="text-sm text-gray-500 italic">{hobbyCategory}</p>
          <p className="mt-2">{description}</p>
          
          <div className="mt-4 space-y-1 text-sm">
            <p><strong>Meeting Location:</strong> {meetingLocation}</p>
            <p><strong>Max Members:</strong> {maxMembers}</p>
            <p><strong>Start Date:</strong> {dayjs(startDate).format('MMMM D, YYYY')}</p>
            <p><strong>Created By:</strong> {userName} ({userEmail})</p>
          </div>

          <div className="mt-6">
            {isActive ? (
              <button className="btn btn-primary w-full">Join Group</button>
            ) : (
              <p className="text-red-500 font-semibold text-center">
                This group is no longer active.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupDetails;
