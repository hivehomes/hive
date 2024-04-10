import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';
import { sql, Client } from "@vercel/postgres"; 
import { AuthUserData } from '@/lib/definitions';

// const db = new Client({
//     host: process.env.POSTGRES_HOST,
//     port: 
// })

// export const getAuthUserData = async (userId) => {
//     const userData = await sql`SELECT ID, EMAIL, FIRST_NAME, LAST_NAME, PHONE_NUMBER
//     from USERS
//     where id = ${ userId }`

//     console.log('User Data:', userData);
//     return userData;
// };

// getAuthUserData(3);