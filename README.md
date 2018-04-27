# Caponi Art Park

The Caponi Art Park application is a mobile-friendly, full-stack web application that allows guests of the Caponi Art Park to explore the park without the aid of a printed map or tour guide. The app consists of a guest side and an admin side. On the guest side a user can interact with the map, which tracks their location and allows them to click on sites to see more information. The sites they see is updated based on their location in the park. Additionally a guest can read about upcoming events at the park, read the rules of the park or sign up for the email list. On the admin side, an employee of the park can place markers on the map and add information to tie it to a location. They can also add another admin, add events and see the email list. 

Heroku link: https://caponiartpark.herokuapp.com

## Built With

- AngularJS
- NodeJS
- Express
- SQL
- Angular-Material
- Google Maps API
- Filestack API

## Getting Started

- Fork this repository to your GitHub and clone it to your local environment. 
- Install all prerequisites. 
- Add your new Google Maps API key to the index.html file
### Prerequisites

Link to software that is required before you attempt to start the app (e.g. node, mongo).

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL] (https://www.postgresql.org/download/)
- [Google Maps API key] (https://developers.google.com/maps/documentation/javascript/get-api-key)

### Installing

Steps to get the development environment running.

- Navigate to the project directory and run `npm install` to install dependencies. 
- Create a database called caponi_art_park in postgreSQL. 
- Copy and paste the contents of the caponi.sql file for a list of all SQL scripts to run in order to build out the database tables
- Once you have your Google Maps API key, source it into the app using the google maps CDN

### Completed Features

High level list of items completed.

- [x] Interactive guest map
- [x] Artifact and multimedia creation and editing
- [x] Supporting information association
- [x] Interface to post and edit events
- [x] Guideline editing interface
- [x] Guest and administration management

### Next Steps

Features that you would like to add at some point in the future.

- [x] Further guest interaction with the page (ability to post to a community board)
- [x] Email interaction/notifications

##Deployment 

- Master branch is deployed on Heroku. Future deployments can follow the same practice.

## Usage

This is intended to be used by the Caponi Art Park. 
 
## Authors

- Christiana Routon
- Elizabeth Wong
- Louis Heim
- Sam Standing
- Ryan Udlehoven


## Acknowledgments

- Thank you to Mary Mosman for creating the map.

- Thanks to our client, Steven Read for allowing us to work on this awesome project. 

- Thanks to Psycho Suzi, for being a great cat. 

