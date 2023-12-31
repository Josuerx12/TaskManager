import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { login, register, user } from "../interfaces/User";

const AuthContext = createContext<context | undefined>(undefined);

interface context {
  user?: user;
  loading: boolean;
  erro: string;
  login: (data: login) => Promise<void>;
  register: (data: register) => Promise<void>;
  logout: () => void;
}

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { user, login, register, logout, loading, erro } = useAuth();
  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loading, erro }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const Auth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
