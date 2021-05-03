# MY DOC - Documentation

## Assignment
Create a small, simple web app (TypeScript + React) to manage doctor’s appointments.

A UI should be built to support creating a new appointment and cancelling an existing one.

Focus is on UI, don’t invest much on the server: just have dummy data served statically or by express. Suppose no login is needed.

## Requirements 
* An appointment has a title, date, and time
* Design / structure (e.g. navbar/footer/sections) that looks nice & doesn’t break on different screens.
* Navigation between pages work
* The code is maintainable (clean code/architecture, tests)
* Document assumptions, decisions, and simplifications, so to make the context clear.


## UX Specifications
* user can browse over a list of doctors
* user can checkout a doctor's profile
* user can make an appointment
* user can go over a list of his appointments
* user can cancel an appointment

## State management
* State management implemented with Redux & Redux toolkit
* Doctors data (fake api results) loaded onto Redux
* Appointments managed with Redux.
* User Data hardcoded (no login required)

## Considerations 
1.  A daily limit of 500 calls is imposed by https://dummyapi.io/.

## Development
1. The application was developed from scratch between Sat 01.05.2021 and Mon 03.05.2021

### Tests
1.  By 03.05.2021 test have not been yet implemented. 
2.  Due to my limited time availablity I prioritised building the app and dealing with the ui as requested.
3.  Next step would be to write tests with jest and enzyme.

## Deployment
* repo on github: https://github.com/NicolasdRa/appointments-app
* deployed on netlify
