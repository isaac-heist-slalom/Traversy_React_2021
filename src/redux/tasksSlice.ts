import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddTask } from "../components/AddTask";
import { Task } from "../components/Task";

interface TasksSlice {
  tasks: Task[];
}

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await fetch("http://localhost:5001/tasks");
  const data = await res.json();

  return data;
});

const fetchTask = async (id: number) => {
  const res = await fetch(`http://localhost:5001/tasks/${id}`);
  const data: Task = await res.json();

  return data;
};

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task: AddTask) => {
    const { text, day, reminder } = task;

    const res = await fetch("http://localhost:5001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        day,
        reminder,
      }),
    });

    const newTask = await res.json();

    return newTask;
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: number) => {
    await fetch(`http://localhost:5001/tasks/${id}`, {
      method: "DELETE",
    });

    return id;
  }
);

export const toggleReminder = createAsyncThunk(
  "tasks/toggleReminder",
  async (id: number) => {
    const taskToUpdate = await fetchTask(id);

    const data = await fetch(`http://localhost:5001/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...taskToUpdate,
        reminder: !taskToUpdate.reminder,
      }),
    });

    const updatedTask = await data.json();

    return updatedTask;
  }
);

const initialState: TasksSlice = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "tasksStore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTasks.fulfilled,
      (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload;
      }
    );
    builder.addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
      state.tasks = [...state.tasks, action.payload];
    });
    builder.addCase(
      deleteTask.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      }
    );
    builder.addCase(
      toggleReminder.fulfilled,
      (state, action: PayloadAction<Task>) => {
        const updatedTask = action.payload;
        const { id } = updatedTask;
        state.tasks = state.tasks.map((task) =>
          task.id === id ? updatedTask : task
        );
      }
    );
  },
});

export default taskSlice.reducer;
