import { cancel, create } from '../../redux/appointmentSlice';
import { store } from '../../redux/store';

describe('tests on appointmentsSlice', () => {
  let appointments = store.getState().appointments.data;
  test('should contain 3 appointments by default', () => {
    expect(appointments.length).toBe(3);
  });

  test('should create a new appointment correctly', () => {
    let appointments = store.getState().appointments.data;
    const newAppointment = {
      id: '28b4217c-0df3-4cb5-a9c3-55e8a06dcf7b',
      title: 'Test appointment',
      date: 'May 6th 21',
      time: '3:22 PM',
      user: 'Jane Smith',
      doctor: 'Dr. John Doe',
      description: 'remember to bring x-ray',
    };

    store.dispatch(create(newAppointment));
    appointments = store.getState().appointments.data;

    expect(appointments.length).toEqual(4);
  });

  test('should delete an appointment correctly', () => {
    let appointments = store.getState().appointments.data;
    console.log(appointments);

    const appointmentToDelete = {
      id: '28b4217c-0df3-4cb5-a9c3-55e8a06dcf7b',
      title: 'Dentist',
      date: 'May 6th 21',
      time: '3:22 PM',
      user: 'Jane Smith',
      doctor: 'Dr. John Doe',
      description: 'remember to bring x-ray',
    };

    store.dispatch(cancel(appointmentToDelete));
    appointments = store.getState().appointments.data;

    expect(appointments.length).toEqual(3);
  });
});
