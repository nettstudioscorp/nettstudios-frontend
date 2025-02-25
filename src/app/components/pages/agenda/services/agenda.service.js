class AgendaService {
  constructor() {
    // =============== Events ======================

    this.mockEvents = [
      {
        id: 1,
        title: "Assassin's Creed Valhalla",
        startTime: '16:00',
        date: new Date(2025, 1, 1).toISOString(),
        type: 'Retorno',
        status: 'Em breve',
        description: 'Retorno da serie!',
        styleClass: 'game-event',
      },

      // {
      //   id: 2,
      //   title: "Assassin's Creed Unity",
      //   startTime: '14:30',
      //   date: new Date(2025, 0).toISOString(),
      //   type: 'Nova serie',
      //   status: 'Em breve',
      //   description: 'Nova serie!',
      //   styleClass: 'game-event',
      // },

      // {
      //   id: 3,
      //   title: 'L.A.NOIRE',
      //   startTime: '10:00',
      //   date: new Date(2025, 1, 3).toISOString(),
      //   type: 'Serie recorente',
      //   status: 'Em breve',
      //   description: 'Gameplay com legenda PT-BR',
      //   styleClass: 'game-event',
      // },
    ];

    // =============== Holidays ======================

    this.holidays = [
      // 2024
      { date: '2024-01-01', name: 'Confraternização Universal' },
      { date: '2024-02-12', name: 'Carnaval' },
      { date: '2024-02-13', name: 'Carnaval' },
      {
        date: '2024-02-14',
        name: 'Quarta-feira de Cinzas (Ponto Facultativo até 14h)',
      },
      { date: '2024-03-29', name: 'Sexta-feira Santa' },
      { date: '2024-03-31', name: 'Páscoa' },
      { date: '2024-04-21', name: 'Tiradentes' },
      { date: '2024-05-01', name: 'Dia Mundial do Trabalho' },
      { date: '2024-05-30', name: 'Corpus Christi' },
      { date: '2024-09-07', name: 'Independência do Brasil' },
      { date: '2024-10-12', name: 'Nossa Senhora Aparecida' },
      { date: '2024-11-02', name: 'Finados' },
      { date: '2024-11-15', name: 'Proclamação da República' },
      {
        date: '2024-12-24',
        name: 'Véspera de Natal (Ponto Facultativo após 14h)',
      },
      { date: '2024-12-25', name: 'Natal' },
      {
        date: '2024-12-31',
        name: 'Véspera de Ano Novo (Ponto Facultativo após 14h)',
      },

      // 2025
      { date: '2025-01-01', name: 'Confraternização Universal' },
      { date: '2025-03-03', name: 'Carnaval' },
      { date: '2025-03-04', name: 'Carnaval' },
      {
        date: '2025-03-05',
        name: 'Quarta-feira de Cinzas (Ponto Facultativo até 14h)',
      },
      { date: '2025-04-18', name: 'Sexta-feira Santa' },
      { date: '2025-04-20', name: 'Páscoa' },
      { date: '2025-04-21', name: 'Tiradentes' },
      { date: '2025-05-01', name: 'Dia Mundial do Trabalho' },
      { date: '2025-06-19', name: 'Corpus Christi' },
      { date: '2025-09-07', name: 'Independência do Brasil' },
      { date: '2025-10-12', name: 'Nossa Senhora Aparecida' },
      { date: '2025-11-02', name: 'Finados' },
      { date: '2025-11-15', name: 'Proclamação da República' },
      {
        date: '2025-12-24',
        name: 'Véspera de Natal (Ponto Facultativo após 14h)',
      },
      { date: '2025-12-25', name: 'Natal' },
      {
        date: '2025-12-31',
        name: 'Véspera de Ano Novo (Ponto Facultativo após 14h)',
      },
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

  isHoliday(date) {
    const formattedDate = date.toISOString().split('T')[0];
    return this.holidays.find((holiday) => holiday.date === formattedDate);
  }
}

export const agendaService = new AgendaService();
