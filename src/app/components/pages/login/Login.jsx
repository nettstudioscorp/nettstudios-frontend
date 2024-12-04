import React, { useState } from "react";
import "../login/Login.css"; // Importe seu arquivo de estilização personalizado

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="login-container">
      <div className="form-card">
        <h2>{isLogin ? "Login" : "Cadastro"}</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Endereço de email
            </label>
            <input type="email" className="form-control" id="email" required />
            <div id="emailHelp" className="form-text">
              {isLogin
                ? "Nunca compartilharemos seu e-mail com mais ninguém."
                : "Insira seu email para criar a conta."}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
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
                required
              />
            </div>
          )}

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              {isLogin
                ? "Lembre de mim"
                : "Eu concordo com os termos e condições"}
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            {isLogin ? "Login" : "Criar uma conta"}
          </button>
        </form>

        <p className="switch-form" onClick={toggleForm}>
          {isLogin
            ? "Não tem uma conta? Registre-se aqui."
            : "Já tem uma conta? Entre aqui."}
        </p>
      </div>
    </div>
  );
};

export default Login;
