import React, { Component } from 'react';
import { get } from '../helpers/http.js';

class SightingsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sightings: [],
      descending: true,
    };
  }

  updateSightings() {
    // Fetch
    get("/sightings").then(sightings => {
      // Sort by dateTime
      sightings.sort((a, b) => {
        let aMilliseconds = new Date(a.dateTime).getTime();
        let bMilliseconds = new Date(b.dateTime).getTime();
        if (this.state.descending) {
          return aMilliseconds < bMilliseconds;
        }
        return aMilliseconds > bMilliseconds;
      });

      // Set
      this.setState({ sightings: sightings });

    }).catch((error) => {
      console.log(error);
    });
  }

  handleSort = () => {
    this.setState({
      sightings: this.state.sightings.reverse(),
      descending: !this.state.descending
    });
  }

  componentWillMount() {
    this.updateSightings();
  }

  renderSightings() {
    return this.state.sightings.map((sighting) => (
      <li key={ sighting.id }>
        <h2>{ new Date(sighting.dateTime).toLocaleString() }</h2>
        <p>{ sighting.count }x { sighting.species }</p>
        <p>{ sighting.description }</p>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleSort }>
          { this.state.descending ? "Sort Ascending" : "Sort Descending" }
        </button>
        <ul>
          { this.renderSightings() }
        </ul>
      </div>
    )
  }
}

export default SightingsList;
