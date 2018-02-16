# Kwaak

A small SPA for logging and viewing duck sightings. You read correctly. Duck sightings are **very** important.

## Planned Features:

1. List sightings with all necessary info
2. Add a sighting
3. Validate when adding
4. Sort list by date (asc/desc)

## Endpoints and data model

This app utilizes a small backend with following endpoints:

1. GET /sightings
2. POST /sightings
3. GET /species

A *Sighting* has following keys:

1. id
2. dateTime - ISO 8601 time in utc e.g. "2016-12-12T10:10:00Z"
3. description
4. species - Should match any item in /species endpoint e.g. "mallard"
5. count - Number of ducks in a sighting (>0) e.g. 14

A *Species* has following key:

1. name - e.g. "mallard"

## Notes

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
