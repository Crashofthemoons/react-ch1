import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Search from "./../Search"

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Locations</Link>
                <Link to="/animals">Animals</Link>
                <Link to="/employees">Employees</Link>
                <Search />
            </nav>
        )
    }
}