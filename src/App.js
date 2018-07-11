import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeList from "./EmployeesList"
import LocationList from "./LocationList"
import AnimalList from "./AnimalList"

export default class Kennel extends Component {
  state = {
    employees: [
        { name: "Jessica Younker" },
        { name: "Jordan Nelson" },
        { name: "Zoe LeBlanc" },
        { name: "Blaise Roberts" }
    ],
    locations: [
        { name: "Nashville North" },
        { name: "Nashville South" }
    ],
    animals: [
        { name: "Spike" },
        { name: "Doug" },
        { name: "Bonkers" },
        { name: "Flynn" },
    ]
  }

  render() {
      return (
          <React.Fragment>
              <LocationList locations={this.state.locations} />
              <EmployeeList employees={this.state.employees} />
              <AnimalList animals={this.state.animals} />
          </React.Fragment>
      );
  }
}

