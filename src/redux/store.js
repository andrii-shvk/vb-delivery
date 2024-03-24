import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "@/api/rtkApi";
import { pizzaReducer } from "./pizzas/slice/pizzaSlice";
import { burgersReducer } from "./burgers/slice/burgerSlice";
import { othersReducer } from "./others/slice/othersSlice";
import { productReducer } from "./productItem/slice/productItemSlice";
import { basketReducer } from "./basket/slice/basketSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burgers: burgersReducer,
    others: othersReducer,
    product: productReducer,
    basket: basketReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});
