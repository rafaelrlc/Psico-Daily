import React from "react";

const AuthContext = React.createContext({
  accessToken: "" | null,
  role: "" | null,
  isUserLogged: false | true,
  login: (token) => {},
  logout: () => {},
  setRole: () => {},
  setEasterEgg: () => {},
  easterEgg: false | true,
});

export default AuthContext;
