import { useState } from "react";
import AuthContext from "./authContext";
import { useRouter } from "next/router";

const AuthContextProvider = ({ children }) => {
  const router = useRouter();

  const [token, setToken] = useState(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );

  const [role, setRole] = useState(
    typeof window !== "undefined" ? localStorage.getItem("role") : null
  );

  const [easterEgg, setEasterEgg] = useState(false);

  const loginHandler = (token, userRole) => {
    setToken(token);
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }
    setRole(userRole);

    if (typeof window !== "undefined") {
      localStorage.setItem("role", userRole);
    }
  };

  const logoutHandler = () => {
    setToken(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    setRole(null);
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
    easterEgg,
    setEasterEgg: setEasterEgg,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
