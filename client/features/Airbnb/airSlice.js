import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAirbnbListings = createAsyncThunk(
  "airbnb/fetch",
  async (city) => {
    const options = {
      method: "GET",
      url: "https://airbnb13.p.rapidapi.com/search-location",
      params: {
        location: city,
        checkin: "2023-09-16",
        checkout: "2023-09-17",
        adults: "1",
        children: "0",
        infants: "0",
        pets: "0",
        page: "1",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": "7085afcacamshc630e35d43b7a57p1c29f0jsn1141b67ce584",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (err) {
      throw new Error("Failed to fetch Airbnb listings");
    }
  }
);

const airSlice = createSlice({
  name: "airbnb",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAirbnbListings.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchAirbnbListings.rejected, (state, action) => {
      return state;
    });
  },
});

export default airSlice.reducer;
