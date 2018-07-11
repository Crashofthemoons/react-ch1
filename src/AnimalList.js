import React, { Component } from 'react';

export default class AnimalList extends Component {
    render() {
        // console.log(this.props.animalsAndOwners)
        // console.log(this.props.animals)
        this.props.animalsAndOwners.map(item =>{
            let aName
            let oName
            console.log(item.animalId, item.ownerId)
            this.props.animals.forEach(animal =>{
                if(animal.id === item.animalId) {
                    aName = animal.name
                }
            })
            this.props.owners.forEach(owner =>{
                if(owner.id === item.ownerId) {
                    oName = owner.name
                }
            })
            let pair = oName + " " + aName
            console.log(pair)
        })
        return (
            <React.Fragment>
                {

                }
            </React.Fragment>
        )
    }
}