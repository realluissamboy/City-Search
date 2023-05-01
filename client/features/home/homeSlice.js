import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHome = createAsyncThunk('home/fetch', async () => {
  try {
    const { data } = await axios.get('http://localhost:8080/api/homes')
    return data
  } catch (err) {
    return err
  }
})

const homeSlice = createSlice({
  name: 'homes',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHome.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(fetchHome.rejected, (state, action) => {
      return state
    })
  },
})

export default homeSlice.reducer
