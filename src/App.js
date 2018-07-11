import React, { Component } from 'react';
import './App.css';
import EmployeeList from "./EmployeesList"
import LocationList from "./LocationList"
import AnimalList from "./AnimalList"

export default class Kennel extends Component {
  state = {
    employees: [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ],
    locations: [
        { id: 1, name: "Nashville North" },
        { id: 2, name: "Nashville South" }
    ],
    animals: [
        { id: 1, name: "Spike" },
        { id: 2, name: "Doug" },
        { id: 3, name: "Bonkers" },
        { id: 4, name: "Flynn" }
    ],
    owners: [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ],
    animalsAndOwners: [
      { id: 1, animalId: 1, ownerId: 1},
      { id: 2, animalId: 2, ownerId: 2},
      { id: 3, animalId: 2, ownerId: 3},
      { id: 4, animalId: 3, ownerId: 4},
      { id: 5, animalId: 4, ownerId: 5},
      { id: 6, animalId: 4, ownerId: 6}
    ]
  }

  render() {
      return (
          <React.Fragment>
              <LocationList locations={this.state.locations} />
              <EmployeeList employees={this.state.employees} />
              <AnimalList animals={this.state.animals} owners={this.state.animals} animalsAndOwners={this.state.animalsAndOwners}/>
          </React.Fragment>
      );
  }
}

