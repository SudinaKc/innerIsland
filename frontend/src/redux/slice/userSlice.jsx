import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// getting user from cookie

const initialState = {
  user: null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};
// register user
export const registerUserAsync = createAsyncThunk(
  "registerUser",
  async ({ firstName, lastName, email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
console.log(response.data);
      return response.data;
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// login user
export const loginUserAsync = createAsyncThunk(
  "loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// CREATING SLICE
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(registerUserAsync.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
  

});

export const { reset } = userSlice.actions;
