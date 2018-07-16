import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Animal = ({ animal, children, checkOutAnimal }) => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {children}
                </h5>
                <p className="card-text">{animal.breed}</p>
                {
                <Link className="card-link"
                    to={{
                        pathname: `/animals/${animal.id}`,
                        state: { animal: animal }
                    }}>
                    Details
                </Link>
                }
                <button onClick={() => checkOutAnimal(animal.id)}>Delete</button>
            </div>
        </div>
    )
}

Animal.propTypes = {
    // This rule ensures that `employee` is passed a property
    // and that is an object - not a string or number
    animal: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string
      })
}

export default Animal