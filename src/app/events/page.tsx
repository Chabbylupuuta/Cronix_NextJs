export default function EventsPage() {
    const events = [
      {
        id: 1,
        title: 'Career Fair',
        date: '2023-11-15',
        location: 'University Hall',
        description: 'Meet potential employers and explore career opportunities.',
      },
      {
        id: 2,
        title: 'Guest Lecture: AI in Education',
        date: '2023-11-22',
        location: 'Lecture Theatre A',
        description: 'Learn about the latest advancements in AI and its impact on education.',
      },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">University Events</h1>
        {events.map((event) => (
          <div key={event.id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    );
  }