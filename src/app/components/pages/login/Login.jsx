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
      navigate('/');
      window.location.reload();
    }
  }, [navigate]);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Login bem-sucedido!');
        navigate('/');
        window.location.reload();
      } else {
        alert(data.message || 'Erro no login');
      }
    } catch (error) {
      alert('Erro no servidor');
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Senhas não coincidem');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ email, name }));
        alert(data.message);
        navigate('/');
        window.location.reload();
      } else {
        alert(data.message || 'Erro ao cadastrar');
      }
    } catch (error) {
      alert('Erro no servidor');
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

          {!isLogin && (
            <div className="warning-message">
              <p>
                Após o cadastro, para editar seu perfil pela primeira vez, você
                deve sair e entrar novamente.
              </p>
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
