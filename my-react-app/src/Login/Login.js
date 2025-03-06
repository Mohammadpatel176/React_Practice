import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errorData, setErrorData] = useState({
    emailError: "",
    passwordError: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      setErrorData((prev) => ({
        ...prev,
        emailError: "Please enter a valid email address",
      }));
    } else {
      setErrorData((prev) => ({
        ...prev,
        emailError: "",
      }));
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setErrorData((prev) => ({
        ...prev,
        passwordError: "Password must be at least 6 characters long",
      }));
    } else {
      setErrorData((prev) => ({
        ...prev,
        passwordError: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform final validation before submission
    if (!errorData.emailError && !errorData.passwordError) {
      localStorage.setItem('authToken',loginData.email);
      console.log("Form submitted with:", loginData);
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-teal-600 p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Background Hospital SVG Illustrations */}
        <svg
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <g fill="url(#grad1)">
            <circle cx="100" cy="100" r="50" />
            <rect x="300" y="200" width="100" height="50" rx="10" />
            <path
              d="M600,300 Q650,250 700,300 T800,300"
              stroke="white"
              strokeWidth="5"
              fill="none"
            />
          </g>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#ffffff33", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#ffffff66", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        {/* Doctor SVG Illustration */}
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-10 w-40 h-40 opacity-20"
        >
          <circle cx="100" cy="60" r="40" fill="#ffffff" />
          <rect x="60" y="100" width="80" height="60" fill="#ffffff" />
          <line x1="100" y1="100" x2="100" y2="160" stroke="#ffffff" strokeWidth="4" />
          <line x1="80" y1="160" x2="120" y2="160" stroke="#ffffff" strokeWidth="4" />
        </svg>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 max-w-md w-full z-10">
        <h1 className="text-5xl font-extrabold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500 animate-gradient drop-shadow-lg">
          HelloDoc
        </h1>
        <p className="text-center text-gray-300 text-sm mb-6 italic">
          "Trust once & Leave together"
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-200 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder-gray-300"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
                validateEmail(e.target.value);
              }}
            />
            {errorData.emailError && (
              <p className="text-red-500 text-sm">{errorData.emailError}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-200 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder-gray-300"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
                validatePassword(e.target.value);
              }}
            />
            {errorData.passwordError && (
              <p className="text-red-500 text-sm">{errorData.passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-teal-500 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
