import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"


const Location = ({ location, children }) => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {children}
                </h5>
                {
                    <Link className="card-link"
                    to={{
                        pathname: `/locations/${location.id}`,
                        state: { location: location }
                    }}>
                    Details
                </Link>
                }
            </div>
        </div>
    )
}

Location.propTypes = {
    // This rule ensures that `employee` is passed a property
    // and that is an object - not a string or number
    location: PropTypes.object.isRequired,
    id: PropTypes.number,
    name: PropTypes.string,
}

export default Location