import React from "react";

const AuthContext = React.createContext({
  accessToken: "" | null,
  role: "",
  isUserLogged: false | true,
  login: (token) => {},
  logout: () => {},
  setRole: () => {},
});

export default AuthContext;
