import Link from 'next/link';

export default function BlogPage() {
  // Replace with actual data fetching later
  const posts = [
    { slug: 'article-1', title: 'Article 1 Title', excerpt: 'This is the first article.' },
    { slug: 'article-2', title: 'Article 2 Title', excerpt: 'This is the second article.' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cronix Blog</h1>
      <Link href="/books" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
        View Books
      </Link>
      {posts.map((post) => (
        <div key={post.slug} className="mb-4 p-4 border rounded">
          <h2 className="text-xl font-semibold">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}