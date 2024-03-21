import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzaLimit, getPizzaPage } from "../selectors/pizzaSelectors";

export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizza",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const page = getPizzaPage(getState());
    const limit = getPizzaLimit(getState());
    try {
      const response = await $api.get(`/pizzas`, {
        params: {
          _page: page,
          _limit: limit,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        "Sorry... Can not find the data from this resource!"
      );
    }
  }
);
