import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// require("dotenv").config();
// const WEATHERAPIKEY = "092f76be6c13aa4bfc94b42b1c7f76f7";
import { WEATHERAPIKEY } from "../../secrets";

export const fetchWeather = createAsyncThunk("weather/fetch", async (city) => {
  // const WEATHERAPIKEY = process.env.WEATHERAPIKEY;
  console.log("hello world");
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHERAPIKEY}`
    );
    return data;
  } catch (err) {
    return err.toJSON();
  }
});

const weatherSlice = createSlice({
  name: "weather",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      return state;
    });
  },
});

export default weatherSlice.reducer;
