import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/comunidade');
      } else {
        alert('Email ou senha inválidos.');
      }
    } else {
      if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
      }

      localStorage.setItem('user', JSON.stringify({ email, password }));
      alert('Conta criada com sucesso! Faça login.');
      setIsLogin(true);
    }
  };

  return (
    <div className="login-container">
      <div className="form-card">
        <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Endereço de email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirme sua senha
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            {isLogin ? 'Login' : 'Criar uma conta'}
          </button>
        </form>

        <p className="switch-form" onClick={toggleForm}>
          {isLogin
            ? 'Não tem uma conta? Registre-se aqui.'
            : 'Já tem uma conta? Entre aqui.'}
        </p>
      </div>
    </div>
  );
};

export default Login;
