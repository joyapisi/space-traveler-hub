import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rocket: [],
  isLoading: false,
};

export const getRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get(url);
  const rocket = response.data;
  return rocket.map((rocket) => (
    {
      id: rocket.id,
      name: rocket.name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    }
  ));
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rocket.map((rocket) => {
        if (rocket.id === action.payload) return { ...rocket, reserved: !rocket.reserved };
        return rocket;
      });
      return { ...state, rocket };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRockets.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getRockets.fulfilled, (state, action) => ({
        ...state,
        rocket: action.payload,
      }));
  },
});

export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
