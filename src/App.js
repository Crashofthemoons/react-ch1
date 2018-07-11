import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employees from "./EmployeesList"
import LocationList from "./LocationList"

export default class Kennel extends Component {
  render() {
    return (
      <React.Fragment>
        <LocationList />
        <Employees />
      </React.Fragment>
    );
  }
}

