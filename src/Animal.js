import React from "react"
import { Link } from "react-router-dom"

export default props => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.children}
                </h5>
                <p className="card-text">{props.animal.breed}</p>
                {
                <Link className="card-link"
                    to={{
                        pathname: `/animals/${props.animal.id}`,
                        state: { animal: props.animal }
                    }}>
                    Details
                </Link>
                }
                <button onClick={() => props.checkOutAnimal(props.animal.id)}>Delete</button>
                <button onClick={() => props.makeAnimal(props.animal.id)}>Delete</button>
            </div>
        </div>
    )
}

