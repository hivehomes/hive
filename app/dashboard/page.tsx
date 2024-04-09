import React from 'react';
import { sql } from '@vercel/postgres';
import { useAppDispatch, useAppStore } from '@/lib/hooks';
import { authUserDataSlice } from '@/lib/features/authUserData/authUserDataSlice';
import { AuthUserData, Booking, Repair, Amenity, BuildingUnit, BulletinPost, Delivery } from '@/lib/definitions';

export default async function UserDashboard() {
  const dispatch = useAppDispatch();
  const store = useAppStore();

  // let userData;

  const email = 'jim.bean@example.com';

  try {
    const user = {} as AuthUserData;

    const userTableData = await sql`SELECT * FROM users where email = ${email}`;
    user.id = userTableData?.rows[0].id;
    user.email = userTableData?.rows[0].email;
    user.firstName = userTableData?.rows[0].firstName;
    user.lastName = userTableData?.rows[0].lastName;
    user.phoneNumber = userTableData?.rows[0].phoneNumber;

    const id: string = user.id.toString();

    const bookings = await sql`SELECT * FROM bookings where user_id = ${id}`;
    user.bookings = bookings?.rows as Booking[];

    const repairs = await sql`SELECT * FROM repairs where user_id = ${id}`;
    user.repairs = repairs?.rows as Repair[];

    const amenities = await sql`SELECT * FROM amenities where user_id = ${id}`;
    user.amenities = amenities?.rows as Amenity[];
    
    const userType = await sql`SELECT * FROM user_types where id = ${userTableData?.rows[0].user_type_id}`;
    user.userType = userType?.rows[0].type as "resident" | "staff" | "management" | "admin";

    const buildingUnit = await sql`SELECT * FROM building_unit where id = ${userTableData?.rows[0].unit_id}`;
    user.buildingUnit = buildingUnit?.rows[0] as BuildingUnit;

    const bulletinPosts = await sql`SELECT * FROM bulletin where poster_id = ${id}`;
    user.bulletinPosts = bulletinPosts?.rows as BulletinPost[];

    const deliveries = await sql`SELECT * FROM deliveries where recipient_id = ${id}`;
    user.deliveries = deliveries?.rows as Delivery[];

    console.log('user:', user);

    dispatch(authUserDataSlice.actions.setUserData(user));
  } catch (error) {
    console.error('Error fetching user data:', error);
  }

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
