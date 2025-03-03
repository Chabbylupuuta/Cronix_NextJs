export default function SportsPage() {
    const teams = [
      { id: 1, name: 'Basketball Team', schedule: 'See schedule...', results: 'See results...' },
      { id: 2, name: 'Soccer Team', schedule: 'See schedule...', results: 'See results...' },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">University Sports</h1>
        {teams.map((team) => (
          <div key={team.id} className="mb-2 p-2 border rounded">
            <h3 className="font-semibold">{team.name}</h3>
            <p>Schedule: {team.schedule}</p>
            <p>Results: {team.results}</p>
          </div>
        ))}
      </div>
    );
  }