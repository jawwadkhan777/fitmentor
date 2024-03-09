import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const options = {
  method: 'GET',
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  // params: {limit: '10'},
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY

  }
};


export const fetchData = createAsyncThunk("fetchData", async (searchTerm, currentPage) => {
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises?page=${currentPage}&limit=1350`,
    options
  );
  const data = await response.json();
  return data;
});

export const fetchDataDetails = createAsyncThunk("fetchDataDetails", async (id) => {
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    options
  );
  const data = await response.json();
  return data;
});

const exercisesSlice = createSlice({
  name: "exercie",
  initialState: {
    // isLoading: false,
    exercisesData: [],
    isError: false,
    exerciseDetails: {}
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchData.pending, (state) => {
    //   state.isLoading = true;
    // });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // state.isLoading = false;
      state.isError = null; // Reset error state
      state.exercisesData = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(fetchDataDetails.fulfilled, (state, action) => {
      // state.isLoading = false;
      state.exerciseDetails = action.payload;
    });
  },
});

export default exercisesSlice.reducer;
