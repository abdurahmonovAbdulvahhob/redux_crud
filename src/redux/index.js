import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./slices/counter-slice"
import wishlist from "./slices/wishlist-slice"
import formSlice from "./slices/crud-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist,
    form: formSlice
  },
})

export default store