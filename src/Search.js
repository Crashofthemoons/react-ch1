import React, { Component } from "react"
import APIManager from "./APIManager"
import EmployeeList from "./EmployeeList"
import AnimalList from "./AnimalList"
import LocationList from "./LocationList"

export default class Search extends Component {
    state = {
        animals: [],
        locations: [],
        employees: []
    }
    // const searchInput = document.getElementById("search").value
    searchBar = (event) => {
        if (event.key === "Enter") {
            console.log("pressed enter")
            let animalSearch = APIManager.searchAnimals(event.target.value)

            let locationSearch = APIManager.searchLocations(event.target.value)

            let employeeSearch = APIManager.searchEmployees(event.target.value)

            Promise.all([animalSearch, locationSearch, employeeSearch]).then(values => {
                this.setState({
                    animals: values[0],
                    locations: values[1],
                    employees: values[2]
                })
                console.log(values[0], values[1], values[2])
              });
            //redirect

        }
    }


    render() {
        return (
            <input onKeyPress={this.searchBar} id="search" type="text" placeholder="Search.."/>
        )
    }
}
