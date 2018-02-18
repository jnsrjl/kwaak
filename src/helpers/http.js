/*
  Helpers for communicating with the duck server.

  Endpoints:
    1. GET /sightings
    2. GET /species
    3. POST /sightings
*/

// Base url
const HOST = "http://localhost:8081";

// The server requires a content-type header
let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');


/* Requests a json array of duck sightings
*/
export function get(url) {
  return fetch(HOST + url, {
    method: "GET",
    headers: myHeaders,
  }).then(response => {
    // Check that response was ok
    if (response.ok) {
      return response.json();
    }
    // Response wasn't ok
    throw new Error('Network response was not ok.');
  })
}

export function post(url, data) {
  return fetch(HOST + url, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
  }).then(response => {
    // Check that response was ok
    if (response.ok) {
      return response.json();
    }
    // Response wasn't ok
    throw new Error('Network response was not ok.');
  })
}
