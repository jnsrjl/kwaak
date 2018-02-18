import React, { Component } from 'react';
import { get } from '../helpers/http.js';

class SightingsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sightings: []
    };
  }

  componentDidMount() {
    get("/sightings").then(sightings => {
      console.log(sightings);
      this.setState({ sightings: sightings });
    }).catch((error) => {
      console.log(error);
    });
  }

  renderSightings() {
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
