import React from "react"

const Employee = props => {
    console.log(props)
    return <li>{props.employee.name}</li>
}

export default Employee