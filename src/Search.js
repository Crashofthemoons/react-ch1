import React, { Component } from "react"
import APIManager from "./APIManager"
import { Redirect } from "react-router-dom"
import SearchResults from "./SearchResults"

export default class Search extends Component {
    state = {
        search: [],
        dashboard: false
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
                    search: values[0].concat(values[1], values[2]),
                    dashboard: true
                })
                console.log(this.state)
              });
            //redirect

        }
    }

    searchComplete() {
        this.setState({
            dashboard: false
        })
    }


    render() {
        if (this.state.dashboard === true) {
            this.searchComplete()
            return <Redirect to={{
                pathname: "/SearchResults",
                state: { search: this.state.search}
            }} />
          }

        return (
            <input onKeyPress={this.searchBar} id="search" type="text" placeholder="Search.."/>
        )
    }
}

