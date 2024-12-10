export const UserService = {
  signup: async ({ email, password, name }) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      throw new Error('Usuário já existe');
    }

    users.push({ email, password, name });
    localStorage.setItem('users', JSON.stringify(users));

    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify({ email, name }));

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
};
