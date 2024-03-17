import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/slice";
import { rtkApi } from "@/api/rtkApi";
import { pizzaReducer } from "./pizzas/slice/pizzaSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pizza: pizzaReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware)
})