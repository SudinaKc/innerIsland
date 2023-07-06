import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  isFetching: false,
  isSuccess: false,
  isError: false,
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

// logout user
export const logoutUserAsync = createAsyncThunk(
  "logoutUser",
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem("user");
      return null; // Return a success payload indicating a successful logout
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Creating Slice
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
        localStorage.setItem("user", JSON.stringify(payload));
        state.user = payload; // Set the user state
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logoutUserAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.isFetching = false;
        state.isSuccess = false; // Reset isSuccess to false after logout
        state.user = null; // Reset the user state to null
      })
      .addCase(logoutUserAsync.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
