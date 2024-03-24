import { createSlice } from "@reduxjs/toolkit";
import { fetchProductItem } from "../services/fetchProductItem";

const initialState = {
    product: [],
    isLoading: false,
    error: null,
    size: undefined,
    price: undefined,
    type: undefined,
    quantity: undefined
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSize(state, action) {
      state.size = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload.toFixed(2);
    },
    setQuantity(state, action) {
      state.quantity = action.payload;
    },
    clearProduct(state) {
      state.size = undefined;
      state.type = undefined;
      state.price = undefined;
      state.quantity = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductItem.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchProductItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.hasMore = action.payload.length >= state.limit;
    });
    builder.addCase(fetchProductItem.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;