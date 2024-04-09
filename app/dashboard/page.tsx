import React from 'react';
import { sql } from '@vercel/postgres';
import { useAppDispatch, useAppStore } from '@/lib/hooks';
import { authUserDataSlice } from '@/lib/features/authUserData/authUserDataSlice';
import { AuthUserData, Booking, Repair, Amenity, BuildingUnit, BulletinPost, Delivery } from '@/lib/definitions';
import { getUserData } from '@/lib/data';

export default async function UserDashboard() {

  const userData = await getUserData('jim.bean@example.com');

  return (
    <div>
      <h1>User Dashboard</h1>

      <p>banner</p>
      <p>bulletin board</p>
      <p>Weekly news</p>
    </div>
  );
};

// export default UserDashboard;
