import React from "react"

export default props => {

        return (
            <React.Fragment>
                {
                props.search.map((oneSearch, index) =>
                    <div className="card" style={{width: `18rem`}}>
                        <div className="card-body">
                            <h5 className="card-title">
                                {oneSearch.name}
                            </h5>
                        </div>
                    </div>
                    )
                }
            </React.Fragment>
        )

}