import { useEffect, useState } from "react";
import { api } from "../utils/apiConnect";
import { login, register, user } from "../interfaces/User";

export const useAuth = () => {
  const [user, setUser] = useState<user | undefined>(undefined);

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(
      localStorage.getItem("user") || "null"
    );
    if (userFromLocalStorage === null) {
      return setUser(undefined);
    }
    setUser(userFromLocalStorage);
  }, []);

  const login = async (data: login) => {
    const { email, password } = data;

    try {
      if (!email || !password) {
        throw new Error(
          "Os campos de e-mail e senha devem estar preenchidos para efetuar o login."
        );
      }
      const user = await api.post("/login", {
        email: email,
        password: password,
      });

      const usuario = user.data;

      localStorage.setItem("user", JSON.stringify(usuario));

      setUser(usuario);

      alert(usuario.msg);
    } catch (err) {
      alert(err.response.data.map((erros) => erros));
    }
  };

  const register = async (data: register) => {
    const { name, email, password, confirmPassword } = data;

    try {
      if (!name || !email || !password || !confirmPassword) {
        throw new Error(
          "Todos os campos devem estar preenchidos para se registrar."
        );
      }
      if (password !== confirmPassword) {
        throw new Error("As senhas não se conferem.");
      }
      const user = await api.post("/register", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      alert(user.data.msg);
    } catch (err) {
      console.log(err);
      alert(err.response.data.map((erros) => erros));
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(undefined);
    alert("Usuario desconectado com sucesso.");
  };

  return { user, login, register, logout };
};
