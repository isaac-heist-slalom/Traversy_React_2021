import React from "react";
import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addTask } from "../redux/tasksSlice";

export type AddTask = {
  text: string;
  day: string;
  reminder: boolean;
};

export const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    dispatch(addTask({ text, day, reminder }));

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};
