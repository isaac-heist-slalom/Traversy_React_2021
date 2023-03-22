import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import showAddTaskSlice from "./showAddTaskSlice";
import tasksSlice from "./tasksSlice";

const rootReducer = combineReducers({
  showAddTask: showAddTaskSlice,
  tasks: tasksSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
