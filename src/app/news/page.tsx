export default function NewsPage() {
    const news = [
      {
        id: 1,
        category: 'Academic',
        title: 'New Research Grant Awarded',
        date: '2023-11-10',
        content: 'The university has received a significant research grant...',
      },
      {
        id: 2,
        category: 'Sports',
        title: 'Basketball Team Wins Championship',
        date: '2023-11-12',
        content: 'The university basketball team has won the inter-university championship...',
      },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">University News</h1>
        {news.map((article) => (
          <div key={article.id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-600">{article.category} - {article.date}</p>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    );
  }