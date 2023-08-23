import { useEffect, useState } from "react";
import { api } from "../utils/apiConnect";

import { editTask, task } from "../interfaces/Data";
import { Auth } from "../context/AuthContext";

export const useData = () => {
  const [tasks, setTasks] = useState<Array<task> | null>(null);
  const { user } = Auth();

  useEffect(() => {
    if (user) {
      getTasks();
    }
  }, [user]);

  const getTasks = async () => {
    try {
      const res = await api.get("/tasks", {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      setTasks(res.data);
    } catch (error) {
      setTasks(null);
    }
  };

  const createTask = async (task: string) => {
    try {
      await api.post(
        "/createTask",
        { task: task },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await api.delete(`/task/${id}`, {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async (id: string, taskChanges: string | editTask) => {
    console.log(taskChanges);
    try {
      await api.put(`/task/${id}`, taskChanges, {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      getTasks();
    } catch (error) {
      console.log(error);
      alert("Não foi possivel editar a sua tarefa tente novamente mais tarde.");
    }
  };

  return { tasks, createTask, deleteTask, editTask, getTasks };
};
