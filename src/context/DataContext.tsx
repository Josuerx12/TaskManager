import { createContext, useContext } from "react";
import { useData } from "../hooks/useData";
import { user } from "../interfaces/User";
const DataContext = createContext({});

export const DataProvider = ({ children }: { children: JSX.Element }) => {
  const { tasks, createTask, editTask, deleteTask, getTasks } = useData();
  return (
    <DataContext.Provider
      value={{ tasks, createTask, editTask, deleteTask, getTasks }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const Data = () => {
  return useContext(DataContext);
};
