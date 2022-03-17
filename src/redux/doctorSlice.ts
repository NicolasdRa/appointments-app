import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import type { RootState } from './store';
import { Doctor } from './types';
import { API_KEY, baseURL } from '../constants';

// THUNKS
export const fetchDoctors = createAsyncThunk('doctors/fetch', async () => {
	const res = await axios({
		method: 'GET',
		url: `${baseURL}`,
		headers: {
			'x-rapidapi-host': 'fake-users6.p.rapidapi.com',
			'x-rapidapi-key': `${API_KEY}`,
		},
		responseType: 'json',
	});
	return res.data.results as Doctor[];
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
