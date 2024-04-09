import React from 'react';
import { getUserData } from '@/lib/data';
import Tile from '@/app/components/dashboard/Tile';

export default async function UserDashboard() {

  const { id } = await getUserData('jim.bean@example.com');

  return (
    <div>
      <h1>User Dashboard</h1>
      <Tile userId={id} />
      <p>banner</p>
      <p>bulletin board</p>
      <p>Weekly news</p>
    </div>
  );
};
