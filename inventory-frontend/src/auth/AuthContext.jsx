import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // ✅ FIXED IMPORT
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  user: null,
  login: async () => {},
  logout: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // On mount, hydrate from localStorage
    const token = localStorage.getItem("access_token");
    if (token) {
      try {
        const decoded = jwtDecode(token);  // works now
        setUser({ username: decoded.username || decoded.email || "User" });
      } catch (e) {
        console.warn("Invalid token in storage:", e);
        localStorage.removeItem("access_token");
      }
    }
  }, []);

  const login = async ({ email, password }) => {
    const resp = await api
      .post("/auth/token/", { email, password })
      .catch((err) => {
        throw err.response?.data || err;
      });

    const token = resp.data.access || resp.data.token;
    if (!token) throw new Error("No token in login response");

    localStorage.setItem("access_token", token);

    try {
      const decoded = jwtDecode(token);
      setUser({ username: decoded.username || decoded.email || "User" });
    } catch {
      setUser({ username: email });
    }

    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
