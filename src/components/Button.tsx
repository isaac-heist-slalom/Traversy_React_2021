import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateShowAddTask } from "../redux/showAddTaskSlice";

type ButtonProps = {
  color?: string;
  text: string;
};

export const Button = (props: ButtonProps) => {
  const { color = "steelblue", text } = props;
  const showAddTask = useAppSelector((state) => state.showAddTask.value);
  const dispatch = useAppDispatch();
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={() => dispatch(updateShowAddTask(!showAddTask))}
    >
      {text}
    </button>
  );
};
