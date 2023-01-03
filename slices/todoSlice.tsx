import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
      //Actions
      addToDo: (state:any, action:any) => {
        state.items = [...state.items, action.payload];
      },
      //some other actions....
    },
  });
  
export const { addToDo } = todoSlice.actions;

//  Selector
export const selectItems = (state:any) => state.todo.items;
export default todoSlice.reducer;