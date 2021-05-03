import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { create } from '../../../redux/appointmentSlice';
import { selectFormOpen, toogleFormOpen } from '../../../redux/uiSlice';

import { useStyles } from './styles';
import { Appointment, Doctor } from '../../../redux/types';
import { selectCurrentDoctor, selectDoctors } from '../../../redux/doctorSlice';

export const BookAppointmentForm = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const open = useAppSelector<boolean>(selectFormOpen);

  const doctors = useAppSelector<Doctor[]>(selectDoctors);
  const currentDoctor = useAppSelector<Doctor | undefined>(selectCurrentDoctor);

  const [values, setValues] = useState<Appointment>({
    id: '',
    title: '',
    date: '',
    time: '',
    user: '',
    doctor: currentDoctor ? `Dr. ${currentDoctor.lastName}` : '',
    description: '',
  });

  const handleInputChange = (e: any): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    dispatch(create({ ...values, id: uuidv4() }));
    dispatch(toogleFormOpen());
    history.replace('/myaccount');
  };

  const handleClose = (): void => {
    dispatch(toogleFormOpen());
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <DialogTitle
          id='form-dialog-title'
          disableTypography
          className={classes.title}>
          <Typography variant='h6' color='primary'>
            Book your appoinment
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant='body2' className={classes.subtitle}>
            Complete the requestedd info and book your appointment. You will be
            redirected to your account.
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id='doctor'>
              {currentDoctor
                ? 'Your currently chosen doctor is'
                : 'Choose a doctor'}
            </InputLabel>
            <Select
              className={classes.select}
              labelId='doctor-label'
              name='doctor'
              value={currentDoctor ? currentDoctor.lastName : values.doctor}
              onChange={handleInputChange}>
              {doctors.map((doctor, index) => (
                <MenuItem key={index} value={doctor.lastName}>
                  {`Dr. ${doctor.lastName}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid container direction='row'>
            <Grid item xs={8}>
              <TextField
                id='date'
                label='Date'
                type='date'
                name='time'
                onChange={handleInputChange}
                value={values.time}
                className={classes.input_field}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='time'
                label='Time'
                type='time'
                name='date'
                onChange={handleInputChange}
                value={values.date}
                className={classes.input_field}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </Grid>
          </Grid>

          <TextField
            required
            autoFocus
            fullWidth
            margin='dense'
            name='title'
            label='Title'
            autoComplete='current-title'
            value={values.title}
            onChange={handleInputChange}
            className={classes.input_field}
          />
          <TextField
            required
            autoFocus
            fullWidth
            multiline
            rows={3}
            margin='dense'
            name='description'
            label='Description'
            type='details'
            autoComplete='current-details'
            value={values.description}
            onChange={handleInputChange}
            className={classes.input_field}
          />
        </DialogContent>
        <DialogActions className={classes.btns}>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color='secondary'>
            Book
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
