import { configureStore } from "@reduxjs/toolkit";
import showAddTaskSlice from "./showAddTaskSlice";
import tasksSlice from "./tasksSlice";

export const store = configureStore({
  reducer: {
    showAddTask: showAddTaskSlice,
    tasks: tasksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
