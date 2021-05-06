import { fetchDoctors } from '../../redux/doctorSlice';
import { store } from '../../redux/store';

describe('tests on doctorSlice', () => {
  let doctors = store.getState().doctors.data;

  test('should contain 0 doctors by default', () => {
    expect(doctors.length).toBe(0);
  });
});
