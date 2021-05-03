# MY DOC - APPOINTMENTS APP

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


## Development
1. The application was developed from scratch between Sat 01.05.2021 and Mon 03.05.2021 
2. Stack: React, Typescript, Redux, Redux Toolkit & Material UI.

## Data & State Management
* User Data hardcoded (no login required in assignment)
* Doctors data retrieved from fake users api. Results loaded onto Redux.
* Appointments managed with Redux.
* Ui form actions managed with redux.

## Considerations 
1.  A daily limit of 500 calls is imposed by https://dummyapi.io/.

## Tests
1.  By 03.05.2021 test have not been yet implemented due to my limited time availablity. I prioritised building the app and dealing with the ui as requested.
2.  Next step would be to write tests with jest and enzyme.

## Deployment
* repo on github: https://github.com/NicolasdRa/appointments-app
* deployed on netlify: https://mydoc-appointments.netlify.app
