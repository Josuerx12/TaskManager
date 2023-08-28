import { useMemo } from "react";
import { task } from "../interfaces/Data";

export const useFilterTasks = (tasks: Array<task> | null) => {
  const allTasks = useMemo(() => {
    return tasks?.filter((task) => !task.doing && !task.done);
  }, [tasks]);
  const allDoneTasks = useMemo(() => {
    return tasks?.filter((task) => task.done && !task.doing);
  }, [tasks]);
  const allDoingTasks = useMemo(() => {
    return tasks?.filter((task) => !task.done && task.doing);
  }, [tasks]);

  return { allTasks, allDoneTasks, allDoingTasks };
};
