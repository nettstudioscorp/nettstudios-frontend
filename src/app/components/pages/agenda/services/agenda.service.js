export const AgendaService = {
  mockEvents: [
    {
      id: 1,
      title: 'L.A.NOIRE',
      startTime: '10:00',
      date: new Date(2025, 0, 1).toISOString(),
      type: 'Serie recorente',
      status: 'Em breve',
      description: 'Gameplay com legenda PT-BR',
      styleClass: 'game-event',
    },
    {
      id: 2,
      title: "Assassin's Creed Valhalla",
      startTime: '14:00',
      date: new Date(2024, 11, 25).toISOString(),
      type: 'Retorno',
      status: 'Em breve',
      description: 'Retorno da serie!',
      styleClass: 'game-event',
    },
    {
      id: 2,
      title: "Assassin's Creed Valhalla",
      startTime: '14:00',
      date: new Date(2024, 11, 25).toISOString(),
      type: 'Retorno',
      status: 'Em breve',
      description: 'Retorno da serie!',
      styleClass: 'game-event',
    },
  ],

  getEvents: () => {
    let events = localStorage.getItem('agenda_events');
    if (!events) {
      events = AgendaService.mockEvents;
    } else {
      events = JSON.parse(events);

      events = events.map((event) => {
        const mockEvent = AgendaService.mockEvents.find(
          (mock) => mock.id === event.id
        );
        return mockEvent || event;
      });
    }
    localStorage.setItem('agenda_events', JSON.stringify(events));
    return events;
  },

  addEvent: (event) => {
    const events = AgendaService.getEvents();
    const newEvent = {
      id: Date.now(),
      ...event,
    };
    events.push(newEvent);
    localStorage.setItem('agenda_events', JSON.stringify(events));
    return newEvent;
  },

  updateEvent: (eventId, updatedEvent) => {
    const events = AgendaService.getEvents();
    const index = events.findIndex((event) => event.id === eventId);
    if (index !== -1) {
      events[index] = { ...events[index], ...updatedEvent };
      localStorage.setItem('agenda_events', JSON.stringify(events));
      return events[index];
    }
    return null;
  },

  deleteEvent: (eventId) => {
    const events = AgendaService.getEvents();
    const filteredEvents = events.filter((event) => event.id !== eventId);
    localStorage.setItem('agenda_events', JSON.stringify(filteredEvents));
  },

  getEventsByMonth: (year, month) => {
    const events = AgendaService.getEvents();
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });
  },

  getEventsByWeek: (startDate, endDate) => {
    const events = AgendaService.getEvents();
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= startDate && eventDate <= endDate;
    });
  },

  isAdmin: (email) => {
    return email === 'admin@example.com';
  },

  clearEvents: () => {
    localStorage.removeItem('agenda_events');
  },

  importEvents: (events) => {
    if (Array.isArray(events)) {
      localStorage.setItem('agenda_events', JSON.stringify(events));
      return true;
    }
    return false;
  },
};
