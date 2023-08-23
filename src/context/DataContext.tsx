import { createContext, useContext } from "react";
import { useData } from "../hooks/useData";
import { editTask, task } from "../interfaces/Data";

interface context {
  tasks: Array<task> | null;
  createTask: (task: string) => Promise<void>;
  editTask: (id: string, taskChanges: string | editTask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  getTasks: () => Promise<void>;
}

const DataContext = createContext<context | undefined>(undefined);

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
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
