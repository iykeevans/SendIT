# SendIT 
[![Build Status](https://travis-ci.org/iykeevans/SendIT.svg?branch=master)](https://travis-ci.org/iykeevans/SendIT)


  
> SendIT is a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.

## Live UI
UI is currently live at [https://iykeevans.github.io/SendIT/UI](https://iykeevans.github.io/SendIT/UI)

## Project Overview  
A Template for SendIT application with the features below. 

## Required Features
1. Users can create an account and log in.
2. Users can create a parcel delivery order.
3. Users can change the destination of a parcel delivery order.
4. Users can cancel a parcel delivery order.
5. Users can see the details of a delivery order.
6. Admin can change the status and present location of a parcel delivery order.  

## Optional Features
1. The application should display a Google Map with Markers showing the pickup location
and the destination .
2. The application should display computed travel distance and journey duration between
the pickup location and the destination. Leverage Google Maps Distance Matrix Service .
3. The user gets real-time email notification when Admin changes the status of their parcel.
4. The user gets real-time email notification when Admin changes the present location of
their parcel.  

## Technologies
* Nodejs
* Express
* Eslint, Babel, Mocha, Chai  

## Base URL
https://andela-sendit.herokuapp.com/api/v1

## API Endpoints
| Verb     | Endpoint                  | Action                                    | Description                    |
| :------- | :------------------------ | :---------------------------------------- | :----------------------------- |
| GET      | /parcels                  | Fetch all parcels delivery orders         |                                |
| POST     | /parcels                  | Create a parcel delivery order            |                                |
| GET      | /parcels/\<id>            | Fetch a parcel delivery offer             | `id` should be parcel id       |
| GET      | /users/\<id>/parcels      | Fetch a users parcel delivery orders      | `id` should be user id         |
| PUT      | /parcels/\<id>/cancel     | changes parcel delivery order status      | `id` should be parcel id       |

## Setting up locally
1. Clone this repository to your local machine  
2. Cd to directory `cd Ride-my-way`
3. Create `.env` file.
4. Use the format in `.env.example` file to add configure the API
5. Run `npm install` to install dependencies
6. Start app with `npm start`
  
## Test
Run `npm test`

## Live API
API is currently live at [https://andela-sendit.herokuapp.com/api/v1](https://andela-sendit.herokuapp.com/api/v1)

## Discovered an issue
Did you find anything that you think should be fixed or added? Kindly create an issue so they can be resolved as soon as possible

## Author
Ezeani Ikenna
