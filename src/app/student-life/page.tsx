export default function StudentLifePage() {
    const clubs = [
      { id: 1, name: 'Debating Society', description: 'Engage in lively debates.' },
      { id: 2, name: 'Computer Club', description: 'Explore the world of technology.' },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Student Life</h1>
        <h2 className="text-2xl font-semibold mb-2">Clubs and Organizations</h2>
        {clubs.map((club) => (
          <div key={club.id} className="mb-2 p-2 border rounded">
            <h3 className="font-semibold">{club.name}</h3>
            <p>{club.description}</p>
          </div>
        ))}
        {/* Add more sections for campus facilities, testimonials, etc. */}
      </div>
    );
  }