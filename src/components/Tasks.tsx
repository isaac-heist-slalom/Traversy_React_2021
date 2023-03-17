import { useAppSelector } from "../redux/hooks";
import { Task } from "./Task";

export const Tasks = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};
