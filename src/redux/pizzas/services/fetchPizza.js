import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzaLimit, getPizzaPage } from "../selectors/pizzaSelectors";

export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizza",
  async (_, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI;
    console.log('getState', getState());
    const page = getPizzaPage(getState());
    const limit = getPizzaLimit(getState());
    console.log('page', page);
    try {
      const response = await $api.get(`/pizzas`, {
        params: {
          _limit: limit,
          _page: page
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Sorry... Can not find the data from this resource!"
      );
    }
  }
);
