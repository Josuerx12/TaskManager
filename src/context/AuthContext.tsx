import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { login, register, user } from "../interfaces/User";

const AuthContext = createContext<context | null>(null);

interface context {
  user?: user;
  login: (data: login) => Promise<void>;
  register: (data: register) => Promise<void>;
  logout: () => void;
}

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { user, login, register, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const Auth = () => {
  return useContext(AuthContext);
};
