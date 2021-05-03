import { combineReducers } from 'redux';

import doctorSlice from './doctorSlice';
import appointmentSlice from './appointmentSlice';
import uiSlice from './uiSlice';

const rootReducer = combineReducers({
  doctors: doctorSlice,
  appointments: appointmentSlice,
  ui: uiSlice,
});

export default rootReducer;
