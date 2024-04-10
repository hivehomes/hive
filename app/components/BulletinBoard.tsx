import React from 'react';
import { sql } from '@vercel/postgres';

interface PostsGenerate {
  id: number;
  title: string;
  body: string;
}

export default async function BulletinBoard() {
  let data;
  try {
    data = await sql`SELECT * FROM bulletin WHERE id=1`;
  } catch (e: any) {
    console.log(
      'Table does not exist, creating and seeding it with dummy data now...'
    );
  }

  const { rows: posts } = data;
  //console.log(data);

  return (
    <>
      <div> Bulletin Board </div>
      <div>
        {posts.map((post: PostsGenerate) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
