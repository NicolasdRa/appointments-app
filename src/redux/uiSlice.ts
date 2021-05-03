import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';

// SLICE
interface UiState {
  formOpen: boolean;
}

const initialState: UiState = {
  formOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toogleFormOpen: (state, action: PayloadAction) => {
      const open = state.formOpen;
      state.formOpen = !open;
    },
  },
});

// ACTIONS
export const { toogleFormOpen } = uiSlice.actions;

// SELECTORS
export const selectFormOpen = (state: RootState) => state.ui.formOpen;

export default uiSlice.reducer;
