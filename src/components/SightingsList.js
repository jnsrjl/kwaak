import React, { Component } from 'react';
import { get } from '../helpers/http.js';

class SightingsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sightings: []
    };
  }

  renderSightings() {
    get("/sightings").then(sightings => {
      this.setState({ sightings: sightings });
    }).catch((error) => {
      console.log(error);
    });

    return this.state.sightings.map((sighting) => (
      <li key={ sighting.id }>
        { sighting.id } : { sighting.description }
      </li>
    ));
  }

  render() {
    return (
      <ul>
        { this.renderSightings() }
      </ul>
    )
  }
}

export default SightingsList;
