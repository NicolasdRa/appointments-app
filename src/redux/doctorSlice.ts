import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';
import axios from 'axios';
import { Doctor } from './types';

// THUNKS
export const fetchDoctors = createAsyncThunk('doctors/fetch', async () => {
  const res = await axios({
    method: 'get',
    url: 'https:dummyapi.io/data/api/user?limit=10',
    headers: {
      'app-id': '608c47a1017d2283dce814a6',
    },
    responseType: 'json',
  });

  return res.data.data as Doctor[];
});

// SLICE
export interface DoctorState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  data: Doctor[] | [];
  current: Doctor | undefined;
}

const initialState: DoctorState = {
  loading: 'idle',
  data: [],
  current: undefined,
};

const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<Doctor>) => {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(fetchDoctors.rejected, (state, action) => {
      state.loading = 'failed';
    });
  },
});

// ACTIONS
export const { setCurrent } = doctorSlice.actions;

// SELECTORS
export const selectDoctors = (state: RootState) => state.doctors.data;

export const selectCurrentDoctor = (state: RootState) => state.doctors.current;

export default doctorSlice.reducer;
