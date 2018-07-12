import React from "react"

const Location = props => {
    console.log(props)
    return <li>{props.location.name}</li>
}

export default Location