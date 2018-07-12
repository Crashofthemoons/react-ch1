import React, { Component } from 'react';
import Animal from "./Animal"

export default class AnimalList extends Component {
    state = {
        animals: [
            { id: 1, name: "Spike" },
            { id: 2, name: "Doug" },
            { id: 3, name: "Bonkers" },
            { id: 4, name: "Flynn" }
        ],
        owners: [
            { id: 1, name: "Ryan Tanay" },
            { id: 2, name: "Emma Beaton" },
            { id: 3, name: "Dani Adkins" },
            { id: 4, name: "Adam Oswalt" },
            { id: 5, name: "Fletcher Bangs" },
            { id: 6, name: "Angela Lee" }
        ],
        animalsAndOwners: [
          { id: 1, animalId: 1, ownerId: 1},
          { id: 2, animalId: 2, ownerId: 2},
          { id: 3, animalId: 2, ownerId: 3},
          { id: 4, animalId: 3, ownerId: 4},
          { id: 5, animalId: 4, ownerId: 5},
          { id: 6, animalId: 4, ownerId: 6}
        ]
    }
    render() {
        // this.props.animalsAndOwners.map(item =>{
        //     let aName
        //     let oName
        //     console.log(item.animalId, item.ownerId)
        //     this.props.animals.forEach(animal =>{
        //         if(animal.id === item.animalId) {
        //             aName = animal.name
        //         }
        //     })
        //     this.props.owners.forEach(owner =>{
        //         if(owner.id === item.ownerId) {
        //             oName = owner.name
        //         }
        //     })
        //     let pair = oName + " " + aName
        //     console.log(pair)
        // })
        return (
            <ul>
                {
                    this.state.animals.map(animal=>{
                       return <Animal animal={animal}/>
                    })
                }
            </ul>
        )
    }
}