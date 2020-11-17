import { createContext, useContext, useEffect, useState } from "react";
import * as AuthService from "./auth";

const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  login: () => {
    throw new Error("no auth provider found")
  },
  signup: () => {
    throw new Error("no auth provider found")
  },
  logout: () => {
    throw new Error("no auth provider found")
  },
});

const useAuth = () => useContext(AuthContext);
const ProvideAuth = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AuthService.initAuth();
  }, []);

  const login = ({ username, password }) => {
    return AuthService.login({ username, password }).then((user) =>
      setUser(user)
    );
  };

  const signup = ({ username, password, firstName, lastName, email }) => {
    return AuthService.signup({ username, password, firstName, lastName, email }).then((user) =>{
      setUser(user)}
    );
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn: !!user, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, ProvideAuth };
