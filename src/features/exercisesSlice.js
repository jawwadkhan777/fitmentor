import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const options = {
  method: 'GET',
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  // params: {limit: '10'},
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Key': '9dcd382b79msh891eb3ef683a4adp136186jsn6827e2ec7b5b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = createAsyncThunk("fetchData", async (searchTerm, currentPage) => {
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchTerm}?limit=100`,
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
      state.isLoading = false;
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
