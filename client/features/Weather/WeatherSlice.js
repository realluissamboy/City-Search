import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const apiKey = require('../../../secrets')

export const fetchWeather = createAsyncThunk('weather/fetch', async () => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&&appid=${apiKey}`
    )
    return res.data
  } catch (err) {
    return err
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
  },
})

export default weatherSlice.reducer
