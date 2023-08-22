import { useEffect, useState } from "react";
import { task } from "../interfaces/Data";

export const useFilterTasks = (tasks: Array<task>) => {
  const [allTasks, setAllTasks] = useState<Array<task> | null>(null);
  const [allDoneTasks, setAllDoneTasks] = useState<Array<task> | null>(null);
  const [allDoingTasks, setAllDoingTasks] = useState<Array<task> | null>(null);

  useEffect(() => {
    if (tasks === null) {
      setAllTasks(null);
      setAllDoneTasks(null);
      setAllDoingTasks(null);
      return;
    }

    allTasksFilter();
    allDonesTasksFilter();
    allDoingTasksFilter();
  }, [tasks]);

  function allTasksFilter() {
    const tarefas: Array<task> = tasks.filter(
      (task) => !task.doing && !task.done
    );
    if (tarefas === null) {
      setAllDoneTasks(null);
      return;
    }
    setAllTasks(tarefas);
  }
  function allDonesTasksFilter() {
    const tarefas: Array<task> = tasks.filter(
      (task) => task.done && !task.doing
    );
    if (tarefas.length <= 0) {
      setAllDoneTasks(null);
      return;
    }
    setAllDoneTasks(tarefas);
  }
  function allDoingTasksFilter() {
    const tarefas: Array<task> = tasks.filter(
      (task) => task.doing && !task.done
    );
    if (tarefas.length <= 0) {
      setAllDoingTasks(null);
      return;
    }
    setAllDoingTasks(tarefas);
  }

  return { allTasks, allDoneTasks, allDoingTasks };
};
