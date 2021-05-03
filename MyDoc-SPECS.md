# MY DOC

## Context

At TFP we create software that empowers women to take control of and better manage their health.
Let’s create a small, simple web app (TypeScript+React) to manage doctor’s appointments.


 To simplify, .
A UI should be built to support creating a new appointment and cancelling an existing one.

## Requirements
* user can browse over a list of doctors
* user can checkout a doctor's profile and rating
* user can make an appointment
* user can go over a list of his appointments
* user can cancel an appointment

## Specifications 
* An appointment has a title, date, and time
* Design/structure (e.g. navbar/footer/sections) that looks nice & doesn’t break on different screens.
* Navigation between pages work
* The code is maintainable (clean code/architecture, tests)
* Document assumptions, decisions, and simplifications, so to make the context clear.

Tip: Focus is on UI, don’t invest much on the server: just have dummy data served statically or by express. Suppose no login is needed.








## Running local api

1.  make sure you have docker and docker-compose installed
2.  open a terminal and navigate to the upper `docker/` directory
3.  run the api:

    3.1. if it is the first time you run the api use this command:

            docker-compose up -d && docker exec api bundle exec rails db:migrate && docker exec api bundle exec rails db:seed

    3.2. if it not the first time then use this:

            docker-compose up

4.  wait for about 10 to 20 seconds, the api will be running on localhost:3000

## Development

### Tests

To execute tests, run `docker exec -it api bundle exec rspec`. The first time you run tests you could see an error that migrations are pending, in this case run `docker exec api bundle exec rails db:migrate RAILS_ENV=test`

### Util

- get routes `docker exec api /bin/bash -c "bundle exec rails routes | grep feedback"`
- interactive console `docker exec -it api bundle exec rails c`

### Generators

You can fetch the list of available generators with: `docker exec api bundle exec rails g`

- undo generation (e.g. a Model) `bundle exec rails d model Weather`
- migrations:
  - `docker exec -it api bundle exec rails g active_record:migration AddAutomaticallyAssignMemberToAccount`
- api_controller:
  - generates Policy, Api::V1::ApplicationController, basic Views, Rspec, and ...
  - run `docker exec api bundle exec rails g api_controller <controllerName>`, where `controllerName` is low case and singular (e.g. `feedback`)
  - this will generate Viws, Policies, Specs, Controller, but not generate any model, nor change the routes.rb file
- model:
  - `docker exec api bundle exec rails g model Weather --parent Profiles::Resource` this will create a `Weather < Profiles::Resource` class in the models/ folder
  - `docker exec api bundle exec rails g model Profiles::Weather --parent Profiles::Resource` this will create a class like above, but in the folder models/profiles/

## Deploy

- increase version: `bumpversion minor` , see https://github.com/c4urself/bump2version/#installation

## Documentation

- generate from acceptance specs `bundle exec rspec spec/acceptance --format RspecApiDocumentation::ApiFormatter`

## Troubleshooting

- API service hangs forever in production: this is mainly because passenger hasnt started at all, which can be found out by inspecting the log in `passenger-status` which will show no Application group.

  - the solution is to add a proper pointer in the sites-enabled config file of nginx: `passenger_app_root /home/app/mgc-middleware`
  - another thing to look for is that the proxy actually reaches the API, because passenger is started on the first request. It could help to restart the proxy service in such cases

- `standard_init_linux.go:211: exec user process caused "no such file or directory"`:
  - install dos2unix:
  - run dos2unix on the current/docker-entrypoint.sh file
