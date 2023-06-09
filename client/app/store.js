import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import weatherReducer from "../features/Weather/WeatherSlice";
import homeReducer from "../features/home/homeSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    homes: homeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
