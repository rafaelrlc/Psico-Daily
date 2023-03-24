import { useState, useEffect } from "react";
import AuthContext from "./authContext";

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );

  const loginHandler = (token, role) => {
    setToken(token);
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }
  };

  const logoutHandler = () => {
    setToken(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  };

  const contextValue = {
    accessToken: token,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
