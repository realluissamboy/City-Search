import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { WEATHERAPIKEY } from "../../secrets";

export const fetchWeather = createAsyncThunk("weather/fetch", async (city) => {
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
