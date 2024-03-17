import { createSlice } from "@reduxjs/toolkit";
import { fetchPizza } from "../services/fetchPizza";

const initialState = {
  pizza: [],
  isLoading: false,
  error: null,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizza = action.payload;
    });
    builder.addCase(fetchPizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: pizzaActions } = pizzaSlice;
export const { reducer: pizzaReducer } = pizzaSlice;
