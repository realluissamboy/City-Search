import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const { weatherAPIkey } = require('../../../secrets')

export const fetchWeather = createAsyncThunk('weather/fetch', async (city) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIkey}`
    )
    return data
  } catch (err) {
    return err.toJSON()
  }
})

const weatherSlice = createSlice({
  name: 'weather',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(fetchWeather.rejected, (state, action) => {
      return state
    })
  },
})

export default weatherSlice.reducer
