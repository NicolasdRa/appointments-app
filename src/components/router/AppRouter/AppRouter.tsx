import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { DoctorPage } from '../../pages/DoctorPage/DoctorPage';
import { LandingPage } from '../../pages/LandingPage/LandingPage';
import { ListingPage } from '../../pages/ListingPage/ListingPage';
import { AccountPage } from '../../pages/AccountPage/AccountPage';

import { fetchDoctors } from '../../../redux/doctorSlice';
import { useAppDispatch } from '../../../hooks/hooks';
import { BookAppointmentForm } from '../../ui/BookAppointmentForm/BookAppointmentForm';

export const AppRouter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path='/myaccount' component={AccountPage} />
        <Route path='/doctor/:name' component={DoctorPage} />
        <Route exact path='/listing' component={ListingPage} />
        <Route path='/' component={LandingPage} />
      </Switch>
      <BookAppointmentForm />
    </Router>
  );
};
