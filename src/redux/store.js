import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/slice";
import { rtkApi } from "@/api/rtkApi";
import { pizzaReducer } from "./pizzas/slice/pizzaSlice";
import { burgersReducer } from "./burgers/slice/burgerSlice";
import { othersReducer } from "./others/slice/othersSlice";
import { productReducer } from "./productItem/slice/productItemSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pizza: pizzaReducer,
        burgers: burgersReducer,
        others: othersReducer,
        product: productReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware)
})