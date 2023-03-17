import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShowAddTaskState {
  value: boolean;
}

const initialState: ShowAddTaskState = {
  value: false,
};

export const showAddTaskSlice = createSlice({
  name: "showAddTask",
  initialState,
  reducers: {
    updateShowAddTask: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateShowAddTask } = showAddTaskSlice.actions;

export default showAddTaskSlice.reducer;
