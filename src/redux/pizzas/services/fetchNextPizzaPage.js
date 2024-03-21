import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzaHasMore, getPizzaLoading, getPizzaPage } from "../selectors/pizzaSelectors";
import { pizzaActions } from "../slice/pizzaSlice";
import { fetchPizza } from "./fetchPizza";

export const fetchNextPizzaPage = createAsyncThunk(
  "pizza/fetchNextPizzaPage",
  async (_, thunkAPI) => {
    const {dispatch, getState} = thunkAPI;

    const page = getPizzaPage(getState());
    const loading = getPizzaLoading(getState());
    const hasMore = getPizzaHasMore(getState());

    if (hasMore && !loading) {
        dispatch(pizzaActions.setPage(page + 1));
        dispatch(fetchPizza());
    }
  }
);