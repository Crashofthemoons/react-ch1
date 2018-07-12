import React, { Component } from 'react';
import Employee from "./Employee"

export default class EmployeeList extends Component {
    state = {
        employees: [
            { id: 17, name: "Jessica Younker" },
            { id: 18, name: "Jordan Nelson" },
            { id: 19, name: "Zoe LeBlanc" },
            { id: 20, name: "Blaise Roberts" }
        ]
    }
    render() {
        return (
            <ul>
                {
                    this.state.employees.map(employee=>{
                       return <Employee employee={employee} key={employee.id}/>
                    })
                }
            </ul>
        )
    }
}