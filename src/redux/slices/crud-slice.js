import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    value : []
  },
  reducers: {
    addForm: (state,action) => {
      state.value.push(action.payload);
    },
    updateForm: (state,action) => {
      const  {id} = action.payload;
      const index = state.value.findIndex((item)=>item.id === id);
      if(index!== -1) {
        state.value[index] = {...state.value[index],...action.payload};
      }
    },
    deleteForm: (state,action) => {
      const  {id} = action.payload;
      const index = state.value.findIndex((item)=>item.id === id);
      if(index!== -1) {
        state.value.splice(index,1);
      }
    }
  },
})

export const { addForm, updateForm, deleteForm } = formSlice.actions;

export default formSlice.reducer;