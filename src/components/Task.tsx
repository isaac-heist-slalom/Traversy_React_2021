import { FaTimes } from "react-icons/fa";
import { useAppDispatch } from "../redux/hooks";
import { deleteTask, toggleReminder } from "../redux/tasksSlice";

type TaskProps = {
  task: Task;
};

export type Task = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

export const Task = (props: TaskProps) => {
  const { task } = props;
  const dispatch = useAppDispatch();
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => dispatch(toggleReminder(task.id))}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => dispatch(deleteTask(task.id))}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
``;
