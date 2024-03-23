import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getOthersLimit,
  getOthersPage,
} from "../selectors/othersSelectors";

export const fetchOthers = createAsyncThunk(
  "other/fetchOthers",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const page = getOthersPage(getState());
    const limit = getOthersLimit(getState());
    try {
      const response = await $api.get(`/other`, {
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
