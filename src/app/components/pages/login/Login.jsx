import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../pages/login/services/userService';
import '../login/Login.css';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptImageUse, setAcceptImageUse] = useState(false);
  const navigate = useNavigate();
  const toastTopCenter = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigate('/');
      window.location.reload();
    }
  }, [navigate]);

  const toggleForm = () => setIsLogin(!isLogin);

  const showToast = (message) => {
    toastTopCenter.current.show({
      severity: 'info',
      summary: 'Info',
      detail: message,
      life: 3000,
    });
  };

  const handleLogin = async () => {
    try {
      // const response = await fetch(
      //   'https://user-auth-backend-deploy.onrender.com/api/auth/login', {
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
        showToast('Login bem-sucedido!');
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        }, 1000);
      } else {
        showToast(data.message || 'Erro no login');
      }
    } catch (error) {
      showToast('Erro no servidor');
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      showToast('Senhas não coincidem');
      return;
    }

    try {
      // const response = await fetch(
      //   'https://user-auth-backend-deploy.onrender.com/api/auth/signup',
      //   {
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
        showToast(data.message);
        navigate('/');
        window.location.reload();
      } else {
        showToast(data.message || 'Erro ao cadastrar');
      }
    } catch (error) {
      showToast('Erro no servidor');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin && (!acceptTerms || !acceptImageUse)) {
      showToast(
        'Você deve aceitar os termos e a política de privacidade, e autorizar a utilização da imagem.'
      );
      return;
    }
    if (isLogin) {
      await handleLogin();
    } else {
      await handleSignup();
    }
  };

  return (
    <div className="login-container">
      <Toast ref={toastTopCenter} position="top-center" />
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
            <div className="terms-checkbox">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                />
                <label htmlFor="terms">
                  Eu aceito os <a href="/termos-de-uso">Termos de uso</a> e{' '}
                  <a href="/politica-de-privacidade">Política de privacidade</a>
                  .
                </label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="imageAuthorization"
                  checked={acceptImageUse}
                  onChange={(e) => setAcceptImageUse(e.target.checked)}
                />
                <label htmlFor="imageAuthorization">
                  Autorizo a utilização da minha imagem pelo NettStudios.
                </label>
              </div>
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
