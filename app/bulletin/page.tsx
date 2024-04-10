import { sql } from '@vercel/postgres';
import BulletinBoard from '@/app/components/BulletinBoard';
import NewPost from '@/app/components/NewPost';

export default async function Bulletin() {
  let data;
  try {
    data = await sql`SELECT * FROM bulletin`;
  } catch (e: any) {
    console.log(
      'Table does not exist, creating and seeding it with dummy data now...'
    );
  }
  return (
    <>
      <NewPost />
      <BulletinBoard />
    </>
  );
}
