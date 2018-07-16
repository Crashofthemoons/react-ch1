import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Employee = ({ employee, children, fireEmployee }) => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
            <h5 className="card-title">
                {children}
            </h5>
                {
                <Link className="card-link"
                    to={{
                        pathname: `/employees/${employee.id}`,
                        state: { employee: employee }
                    }}>
                    Details
                </Link>
                }
                <button onClick={() => fireEmployee(employee.id)}>Delete</button>
            </div>
        </div>
    )
}

Employee.propTypes = {
    // This rule ensures that `employee` is passed a property
    // and that is an object - not a string or number
    employee: PropTypes.object.isRequired,
    id: PropTypes.number,
    name: PropTypes.string,
}

export default Employee