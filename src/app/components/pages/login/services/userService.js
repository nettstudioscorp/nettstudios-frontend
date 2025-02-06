export const UserService = {
  signup: async ({ email, password, name }) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      throw new Error('Usuário já existe');
    }

    const role = email === 'admin@example.com' ? 'admin' : 'user';
    const newUser = { email, password, name, role };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify({ email, name, role }));

    return true;
  },

  login: async (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }

    return false;
  },

  logout: () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  },

  getUser: () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user || { name: 'Usuário' };
  },

  saveEvent: (event) => {
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));
    return event;
  },

  getEvents: () => {
    return JSON.parse(localStorage.getItem('events') || '[]');
  },

  deleteEvent: (eventId) => {
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    const updatedEvents = events.filter((event) => event.id !== eventId);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  },

  updateEvent: (eventId, updatedEvent) => {
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    const eventIndex = events.findIndex((event) => event.id === eventId);
    if (eventIndex !== -1) {
      events[eventIndex] = { ...events[eventIndex], ...updatedEvent };
      localStorage.setItem('events', JSON.stringify(events));
      return events[eventIndex];
    }
    return null;
  },

  setUserRole: (email, role) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      users[userIndex].role = role;
      localStorage.setItem('users', JSON.stringify(users));

      const currentUser = JSON.parse(localStorage.getItem('user'));
      if (currentUser && currentUser.email === email) {
        currentUser.role = role;
        localStorage.setItem('user', JSON.stringify(currentUser));
      }
    }
  },
};
