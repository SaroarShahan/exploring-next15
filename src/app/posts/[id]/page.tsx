export const revalidate = 30;

type PostParams = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: PostParams) {
  const { id } = await params;
  const post: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((response) => response.json());

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  ).then((response) => response.json());

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
