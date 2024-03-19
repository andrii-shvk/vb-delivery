import { createSlice } from "@reduxjs/toolkit";
import { fetchBurgers } from "../services/fetchBurgers";

const initialState = {
  burgers: [],
  isLoading: false,
  error: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const burgersSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBurgers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.burgers = [...state.burgers, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });
    builder.addCase(fetchBurgers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBurgers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: burgersActions } = burgersSlice;
export const { reducer: burgersReducer } = burgersSlice;