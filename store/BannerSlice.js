import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBanners = createAsyncThunk(
  "Banner/allbanners",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const result = await axios
        .get(`${process.env.customKey}/banner`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          console.log("res.data", res.data);
          return res.data;
        });
      // console.log(result);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const BannerSlice = createSlice({
  name: "Banner",
  initialState: {
    initialloading: false,
    banners: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBanners.pending, (state, action) => {
      state.initialloading = true;
    });
    builder.addCase(getAllBanners.fulfilled, (state, action) => {
      console.log(action.payload);
      state.banners = action.payload;
      state.initialloading = false;
    });
    builder.addCase(getAllBanners.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default BannerSlice.reducer;
