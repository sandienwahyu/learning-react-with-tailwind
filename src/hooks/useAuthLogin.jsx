import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export function useAuthLogin() {
  const [auth, setAuth] = useState({
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setAuth({
        user: decoded.user,
        isLoading: false,
      });
    } catch (error) {
      console.error("Token bermasalah:", error);
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  }, []);

  return auth;
}
