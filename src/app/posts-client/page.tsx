'use client';

import { useEffect, useState } from 'react';

export default function PostsClientPage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPost = async () => {
    const controller = new AbortController();
    setLoading(true);

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          signal: controller.signal,
        }
      );

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('Request was aborted');
      } else {
        console.error('Error fetching posts', error);
      }
    } finally {
      setLoading(false);
    }

    return controller;
  };

  useEffect(() => {
    const controller = fetchPost();

    return () => {
      controller.then((controller) => controller.abort());
    };
  }, []);

  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">
            Total {posts.length} Posts
          </h1>

          <ul className="text-xl">
            {posts.map((post) => (
              <li key={post.id} className="mb-2">
                <h3 className="text-xl font-bold">{post.title}</h3>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
