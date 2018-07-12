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
            { id: 5, name: "Ryan Tanay" },
            { id: 6, name: "Emma Beaton" },
            { id: 7, name: "Dani Adkins" },
            { id: 8, name: "Adam Oswalt" },
            { id: 9, name: "Fletcher Bangs" },
            { id: 10, name: "Angela Lee" }
        ],
        animalsAndOwners: [
          { id: 11, animalId: 1, ownerId: 1},
          { id: 12, animalId: 2, ownerId: 2},
          { id: 13, animalId: 2, ownerId: 3},
          { id: 14, animalId: 3, ownerId: 4},
          { id: 15, animalId: 4, ownerId: 5},
          { id: 16, animalId: 4, ownerId: 6}
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
                       return <Animal animal={animal} key={animal.id}/>
                    })
                }
            </ul>
        )
    }
}