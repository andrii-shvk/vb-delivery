import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBurgersHasMore, getBurgersLoading, getBurgersPage } from "../selectors/burgerSelectors";
import { burgersActions } from "../slice/burgerSlice";
import { fetchBurgers } from "./fetchBurgers";

export const fetchNextBurgersPage = createAsyncThunk(
  "burgers/fetchNextBurgersPage",
  async (_, thunkAPI) => {

    const {dispatch, getState} = thunkAPI;
    const page = getBurgersPage(getState());
    const loading = getBurgersLoading(getState());
    const hasMore = getBurgersHasMore(getState());
    if (hasMore && !loading) {
        dispatch(burgersActions.setPage(page + 1));
        dispatch(fetchBurgers());
    }
  }
);