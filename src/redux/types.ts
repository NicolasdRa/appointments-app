export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  memberSince: string;
  dateOfBirth: string;
  insurance: string;
  img: string;
}

export interface Doctor {
  id: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  email?: string;
  dateOfBirth?: string;
  registerDate?: string;
  phone?: string;
  picture?: string;
  location?: string;
}

export interface Appointment {
  id: string;
  title: string;
  date: string;
  time: string;
  user: string;
  doctor?: string;
  description?: string;
}
