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
            APIManager.searchAnimals(event.target.value)
            .then(animals => {
                this.setState({
                    animals: animals
                })
                console.log(animals)
            })
            APIManager.searchLocations(event.target.value)
            .then(locations => this.setState({
                locations: locations
            }))
            APIManager.searchEmployees(event.target.value)
            .then(employees => this.setState({
                employees: employees
            }))

            //redirect and chain all .thens together.

        }
    }


    render() {
        return (
            <input onKeyPress={this.searchBar} id="search" type="text" placeholder="Search.."/>
        )
    }
}
