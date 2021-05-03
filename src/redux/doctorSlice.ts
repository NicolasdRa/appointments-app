import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import type { RootState } from './store';
import { Doctor } from './types';
import { APP_ID, baseURL } from '../constants';

// THUNKS
export const fetchDoctors = createAsyncThunk('doctors/fetch', async () => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}`,
    headers: {
      'app-id': `${APP_ID}`,
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
