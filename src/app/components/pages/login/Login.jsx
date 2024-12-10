import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../pages/login/services/userService';
import '../login/Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigate('/comunidade');
    }
  }, [navigate]);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleLogin = async () => {
    try {
      const userLoggedIn = await UserService.login(email, password);

      if (userLoggedIn) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ email }));
        alert('Login bem-sucedido!');
        navigate('/comunidade');
      } else {
        alert('Credenciais inválidas!');
      }
    } catch (error) {
      alert('Erro ao fazer login');
    }
  };

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        alert('Senhas não coincidem');
        return;
      }

      const response = await UserService.signup({ email, password, name });

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ email, name }));
      alert('Conta criada com sucesso!');
      navigate('/comunidade');
    } catch (error) {
      alert('Erro ao criar conta');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await handleLogin();
    } else {
      await handleSignup();
    }
  };

  return (
    <div className="login-container">
      <div className="form-card">
        <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="confirmPassword">Confirme sua senha</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>

        <p className="switch-form" onClick={toggleForm}>
          {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
        </p>
      </div>
    </div>
  );
};

export default Login;
