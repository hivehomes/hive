import React from 'react';
import BulletinBoard from '@/app/components/BulletinBoard';
import { getUserData } from '@/lib/data';
import Tile from '@/app/components/dashboard/Tile';
import Banner from '@/app/components/Banner';
import { getSession } from '@/lib/actions';

export default async function UserDashboard() {
  //const session = await getSession();
  const { id } = await getUserData('jim.bean@example.com');

  return (
    <div>
      <h1>User Dashboard</h1>
      <Banner />
      <Tile userId={id} />
      <p>banner</p>
      <BulletinBoard />
      <p>Weekly news</p>
    </div>
  );
};
