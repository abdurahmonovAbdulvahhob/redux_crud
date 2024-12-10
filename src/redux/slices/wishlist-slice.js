import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishlist",
  initialState: { value: [] },
  reducers: {
    addItem: (state, action) => {
      const index = state.value.findIndex(({ id }) => id === action.payload.id);
      if (index < 0) {
        state.value.push(action.payload);
      } else {
        state.value = state.value.filter(({ id }) => id !== action.payload.id);
      }
    },
  },
});

export const { addItem } = wishlist.actions;

export default wishlist.reducer;
