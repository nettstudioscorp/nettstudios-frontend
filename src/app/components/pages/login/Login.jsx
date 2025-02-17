import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../pages/login/services/userService';
import '../login/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptImageUse, setAcceptImageUse] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigate('/');
      window.location.reload();
    }
  }, [navigate]);

  const toggleForm = () => setIsLogin(!isLogin);

  const showToast = (message) => {
    toast.info(message);
  };

  const handleLogin = async () => {
    try {
      const payload = {
        email,
        password,
      };
      console.log('Payload enviado:', JSON.stringify(payload));
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

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
        console.error('Erro na resposta:', data);
        showToast(data.message || 'Erro no login');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      showToast('Erro no servidor');
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      showToast('Senhas não coincidem');
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/signup`,
        {
          email,
          password,
          name,
        }
      );
      showToast('Conta criada com sucesso. Agora faça o login.');
      window.location.href = '/login';
    } catch (error) {
      console.error('Erro no cadastro:', error.response.data.message);
      showToast(error.response.data.message);
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

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const error = validatePassword(newPassword);
    setPasswordError(error);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    const invalidChars = /[<>\/\\|]/;

    if (invalidChars.test(password)) {
      return 'A senha não deve conter caracteres como <, >, /, |, \\.';
    }

    if (!regex.test(password)) {
      return 'A senha deve ter mais de 8 caracteres com pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial (por exemplo, !, @, #, $).';
    }

    return '';
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="form-card">
        <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            {!isLogin && (
              <div className="mb-3">
                <label htmlFor="name">Usuário *</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Senha *</label>
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {passwordError && (
              <div className="password-error">{passwordError}</div>
            )}
          </div>

          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="confirmPassword">Confirme sua senha *</label>
              <div className="password-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
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

          {/* 
          {!isLogin && (
            <div className="warning-message">
              <p>
                Após o cadastro, para editar seu perfil pela primeira vez, você
                deve sair e entrar novamente.
              </p>
            </div>
          )} */}

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
