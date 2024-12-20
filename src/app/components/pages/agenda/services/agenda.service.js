class AgendaService {
  constructor() {
    this.mockEvents = [
      // {
      //   id: 1,
      //   title: 'L.A.NOIRE',
      //   startTime: '10:00',
      //   date: new Date(2025, 0, 1).toISOString(),
      //   type: 'Serie recorente',
      //   status: 'Em breve',
      //   description: 'Gameplay com legenda PT-BR',
      //   styleClass: 'game-event',
      // },
      // {
      //   id: 2,
      //   title: "Assassin's Creed Valhalla",
      //   startTime: '14:00',
      //   date: new Date(2024, 11, 25).toISOString(),
      //   type: 'Retorno',
      //   status: 'Em breve',
      //   description: 'Retorno da serie!',
      //   styleClass: 'game-event',
      // },
      // {
      //   id: 3,
      //   title: "Assassin's Creed Unity",
      //   startTime: '14:30',
      //   date: new Date(2024, 11, 26).toISOString(),
      //   type: 'Nova serie',
      //   status: 'Em breve',
      //   description: 'Nova serie!',
      //   styleClass: 'game-event',
      // },
    ];
  }

  getEvents() {
    let events = localStorage.getItem('agenda_events');
    if (!events) {
      events = this.mockEvents;
    } else {
      events = JSON.parse(events);
    }
    return events;
  }

  addEvent(event) {
    const events = this.getEvents();
    const newEvent = {
      id: Date.now(),
      ...event,
    };
    events.push(newEvent);
    localStorage.setItem('agenda_events', JSON.stringify(events));
    return newEvent;
  }

  updateEvent(eventId, updatedEvent) {
    const events = this.getEvents();
    const index = events.findIndex((event) => event.id === eventId);
    if (index !== -1) {
      events[index] = { ...events[index], ...updatedEvent };
      localStorage.setItem('agenda_events', JSON.stringify(events));
      return events[index];
    }
    return null;
  }

  deleteEvent(eventId) {
    const events = this.getEvents();
    const filteredEvents = events.filter((event) => event.id !== eventId);
    localStorage.setItem('agenda_events', JSON.stringify(filteredEvents));
  }

  getEventsByMonth(year, month) {
    const events = this.getEvents();
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });
  }

  getEventsByWeek(startDate, endDate) {
    const events = this.getEvents();
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= startDate && eventDate <= endDate;
    });
  }

  isAdmin(email) {
    return email === 'admin@example.com';
  }

  clearEvents() {
    localStorage.removeItem('agenda_events');
  }

  importEvents(events) {
    if (Array.isArray(events)) {
      localStorage.setItem('agenda_events', JSON.stringify(events));
      return true;
    }
    return false;
  }

  deleteEventById(eventId) {
    const events = this.getEvents();
    const filteredEvents = events.filter((event) => event.id !== eventId);
    localStorage.setItem('agenda_events', JSON.stringify(filteredEvents));
  }
}

export const agendaService = new AgendaService();
