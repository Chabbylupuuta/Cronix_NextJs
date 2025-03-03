export default function BooksPage() {
    const books = [
      { title: 'Book 1', author: 'Author 1', description: 'Description of book 1.' },
      { title: 'Book 2', author: 'Author 2', description: 'Description of book 2.' },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Cronix Books</h1>
        {books.map((book) => (
          <div key={book.title} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    );
  }