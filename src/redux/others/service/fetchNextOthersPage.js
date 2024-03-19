import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOthersHasMore, getOthersLoading, getOthersPage } from "../selectors/othersSelectors";
import { othersActions } from "../slice/othersSlice";
import { fetchOthers } from "./fetchOthers";

export const fetchNextOthersPage = createAsyncThunk(
    'other/fetchNextOthersPage',
    async (_, thunkAPI) => {

        const {dispatch, getState} = thunkAPI;
        const page = getOthersPage(getState());
        const loading = getOthersLoading(getState());
        const hasMore = getOthersHasMore(getState());
        if (!loading && hasMore) {
            dispatch(othersActions.setPage(page + 1));
            dispatch(fetchOthers());
        }
    }
)