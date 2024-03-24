import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "@/api/rtkApi";
import { pizzaReducer } from "./pizzas/slice/pizzaSlice";
import { burgersReducer } from "./burgers/slice/burgerSlice";
import { othersReducer } from "./others/slice/othersSlice";
import { productReducer } from "./productItem/slice/productItemSlice";
import { basketReducer } from "./basket/slice/basketSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketReducer);

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burgers: burgersReducer,
    others: othersReducer,
    product: productReducer,
    basket: persistedReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(rtkApi.middleware),
});

export const persistor = persistStore(store);
