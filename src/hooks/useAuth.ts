/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer } from "react";
import { api } from "../utils/apiConnect";
import { login, register, user } from "../interfaces/User";
import { AxiosError } from "axios";

export const useAuth = () => {
  interface State {
    user: user | undefined;
    loading: boolean;
    err: any;
  }

  type Action =
    | { type: "loading" }
    | { type: "fetched"; payload?: user }
    | { type: "err"; payload: any };

  const INITIAL_STATE = {
    user: undefined,
    loading: false,
    err: null,
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "loading":
        return { ...state, loading: true };
      case "fetched":
        return { ...state, loading: false, user: action?.payload };
      case "err":
        return { ...state, loading: false, err: action?.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: "loading" });
    const userFromLocalStorage = JSON.parse(
      localStorage.getItem("user") || "null"
    );
    if (userFromLocalStorage === null) {
      return dispatch({ type: "fetched" });
    }
    dispatch({ type: "fetched", payload: userFromLocalStorage });
  }, []);

  const login = async (data: login) => {
    const { email, password } = data;
    dispatch({ type: "loading" });
    try {
      const user = await api.post("/login", {
        email: email,
        password: password,
      });

      const usuario = user.data;

      if (usuario) {
        localStorage.setItem("user", JSON.stringify(usuario));

        dispatch({ type: "fetched", payload: usuario });
        alert("Login realizado com sucesso.");
      }
    } catch (err) {
      const axiosError = err as AxiosError<any>;
      dispatch({ type: "err", payload: axiosError.response?.data.errors });
    }
  };

  const register = async (data: register) => {
    const { name, email, password, confirmPassword } = data;
    dispatch({ type: "loading" });
    try {
      await api.post("/register", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      dispatch({ type: "fetched" });
    } catch (err) {
      const axiosError = err as AxiosError<any>;
      dispatch({ type: "err", payload: axiosError.response?.data.errors[0] });
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "fetched", payload: undefined });
  };

  const user = state.user;
  const loading = state.loading;
  const erro = state.err;

  return { user, login, register, logout, loading, erro };
};
