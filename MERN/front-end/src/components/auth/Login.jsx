import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "../../redux/api/authApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login, { isLoading, error }] = useLoginMutation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/users");
    }
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error, isAuthenticated, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    login(loginData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{
        width: '80%',
        maxWidth: '500px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '16px' }}>Login</h2>
        <form onSubmit={submitHandler}>
          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="email_field">Email</label>
            <input
              type="email"
              id="email_field"
              style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="password_field">Password</label>
            <input
              type="password"
              id="password_field"
              style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <a href="/password/forgot" style={{ float: 'right', marginBottom: '8px' }}>
            Forgot password?
          </a>

          <button
            id="login_button"
            type="submit"
            style={{
              width: '100%',
              padding: '8px 16px',
              borderRadius: '4px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              opacity: isLoading ? 0.7 : 1
            }}
            disabled={isLoading}
          >
            {isLoading ? "Authenticating..." : "LOGIN"}
          </button>

          <div style={{ marginTop: '12px' }}>
            <a href="/register" style={{ float: 'right' }}>
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
