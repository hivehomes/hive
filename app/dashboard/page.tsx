import React from 'react';
import { getUserData } from '@/lib/data';
import Tile from '@/app/components/Tile';
import Banner from '@/app/components/Banner';

export default async function UserDashboard() {
  const { id } = await getUserData('jim.bean@example.com');

  return (
    <div>
      <h1>User Dashboard</h1>
      <Banner />
      <Tile userId={id} />
      <p>banner</p>
      <p>bulletin board</p>
      <p>Weekly news</p>
    </div>
  );
}
