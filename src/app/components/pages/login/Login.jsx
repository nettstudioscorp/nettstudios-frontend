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
              Email address
            </label>
            <input type="email" className="form-control" id="email" required />
            <div id="emailHelp" className="form-text">
              {isLogin
                ? "We'll never share your email with anyone else."
                : "Insira seu email para criar a conta."}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
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
                Confirm Password
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
              {isLogin ? "Remember me" : "I agree to the terms and conditions"}
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="switch-form" onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Register here."
            : "Already have an account? Login here."}
        </p>
      </div>
    </div>
  );
};

export default Login;
