import React from "react";

const AuthContext = React.createContext({
  accessToken: "" | null,
  type: "",
  isUserLogged: false | true,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;
