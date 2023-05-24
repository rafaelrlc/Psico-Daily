import { useState, useContext } from "react";
import AuthContext from "./authContext";
import { useRouter } from "next/router";

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );

  const [role, setRole] = useState(
    typeof window !== "undefined" ? localStorage.getItem("role") : null
  );

  const router = useRouter();

  const loginHandler = (token, userRole) => {
    setToken(token);
    setRole(role);
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("role", userRole);
    }
  };

  const logoutHandler = () => {
    setToken(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    if (typeof window !== "undefined") {
      localStorage.removeItem("role");
    }
    router.push("/");
  };

  const contextValue = {
    accessToken: token,
    login: loginHandler,
    logout: logoutHandler,
    setRole: setRole,
    role: role,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuth = () => useContext(AuthContext);
