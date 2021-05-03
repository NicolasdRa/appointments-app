import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';
import { Appointment } from './types';
import { initialAppointments } from '../assets/data';

// SLICE

// type for the slice state
interface AppointmentsState {
  data: Appointment[];
}

// initial state
const initialState: AppointmentsState = { data: initialAppointments };

export const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Appointment>) => {
      state.data.push(action.payload);
    },
    cancel: (state, action: PayloadAction<Appointment>) => {
      const filtered = state.data.filter(
        (item) => item.id !== action.payload.id,
      );
      state.data = filtered;
    },
  },
});

// ACTIONS
export const { create, cancel } = appointmentSlice.actions;

// SELECTORS
export const selectAppointments = (state: RootState) => state.appointments.data;

// TODO: create selector that returns appointments by user

export default appointmentSlice.reducer;
