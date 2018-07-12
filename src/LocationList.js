import React, { Component } from 'react';
import Location from "./Location"

export default class LocationList extends Component {
    state = {
        locations: [
            { id: 21, name: "Nashville North" },
            { id: 22, name: "Nashville South" }
        ]
      }
    render() {
        return (
            <ul>
                {
                    this.state.locations.map(location=>{
                       return <Location location={location} key={location.id}/>
                    })
                }
            </ul>
        )
    }
}