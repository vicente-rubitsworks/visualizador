import { useRef, useState } from "react";
import React from "react";
import { signup, useAuth, logout, login } from "../../firebase-config";
import { Navigate } from "react-router-dom";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  if (currentUser) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box text-center">
        <div className="login-logo">
          <a href="#">
            <b>Análisis</b>Regional
          </a>
          
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <div className="input-group mb-3">
              <input
                ref={emailRef}
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                ref={passwordRef}
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              {/* /.col */}
              <div className="col-4">
                <button
                  disabled={loading || currentUser}
                  type="submit"
                  onClick={handleSignup}
                  className="btn btn-primary btn-block"
                >
                  Register
                </button>
              </div>
              <div className="col-4">
                <button
                  disabled={loading || currentUser}
                  type="submit"
                  onClick={handleLogin}
                  className="btn btn-primary btn-block"
                >
                  Login
                </button>
              </div>
              {/* /.col */}
            </div>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  );
}
