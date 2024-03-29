import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBurgersLimit, getBurgersPage } from "../selectors/burgerSelectors";

export const fetchBurgers = createAsyncThunk(
  "burgers/fetchBurgers",
  async (_, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI;
    
    const page = getBurgersPage(getState());
    const limit = getBurgersLimit(getState());
    try {
      const response = await $api.get(`/burgers`, {
        params: {
          _limit: limit,
          _page: page
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        "Sorry... Can not find the data from this resource!"
      );
    }
  }
);
