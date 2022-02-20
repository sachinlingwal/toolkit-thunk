import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  isLoading: false,
};

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch("https://picsum.photos/v2/list?page=3&limit=9");
  const formattedResponse = await response.json();
  return formattedResponse;
});

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,

  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.isLoading = true;
    },

    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    [getPhotos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = gallerySlice.actions;
export default gallerySlice.reducer;
