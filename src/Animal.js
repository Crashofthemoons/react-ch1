import React from "react"

const Animal = props => {
    console.log(props)
    return <li>{props.animal.name}</li>
}

export default Animal
