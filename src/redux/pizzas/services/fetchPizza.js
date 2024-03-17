import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizza",
  async (_, thunkAPI) => {
    try {
      const response = await $api.get(`/pizzas`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Sorry... Can not find the data from this resource!"
      );
    }
  }
);
