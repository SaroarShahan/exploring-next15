import Link from 'next/link';

export const revalidate = 30;

export default async function PostsPage() {
  const posts: Post[] = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((response) => response.json());

  return (
    <div>
      <h2>Total {posts.length} posts</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
