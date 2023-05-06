import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAIAPIKEY,
});
const openai = new OpenAIApi(configuration);

export const fetchGenerate = createAsyncThunk(
  "generate/fetch",
  async (city) => {
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(city),
        temperature: 0.6,
        max_tokens: 50,
      });
      return completion.data.choices[0].text;
    } catch (err) {
      return err.toJSON();
    }
  }
);

const generateSlice = createSlice({
  name: "generate",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenerate.fulfilled, (state, action) => {
      return { ...state, [action.payload.city]: action.payload.result };
    });
  },
});

export default generateSlice.reducer;

function generatePrompt(city) {
  const capitalizedCity = city[0].toUpperCase() + city.slice(1).toLowerCase();
  return `Provide 3 suggestions on things to do when you visit a city.

City: New York
Suggestions: Statue of Liberty, One World Trade, and Yankee Stadium
City: Los Angeles
Suggestions: Hollywood Sign, Santa Monica Pier, Hollywood Walk of Fame
City: ${capitalizedCity}
Suggestions:`;
}
