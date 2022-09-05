import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Registers a new user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log("user", user);
  }
);

// Logins user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log("user", user);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
