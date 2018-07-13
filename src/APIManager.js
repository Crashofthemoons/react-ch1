

export default class APIManager {

    static getEmployees = () => {
        return fetch("http://localhost:5002/employees")
        .then(e => e.json())
    }

    static getAnimals = () => {
        return fetch("http://localhost:5002/animals")
        .then(e => e.json())
    }

    static getLocations = () => {
        return fetch("http://localhost:5002/locations")
        .then(e => e.json())
    }

    static searchEmployees = (input) => {
        return fetch(`http://localhost:5002/employees?q=${input}`)
        .then(e=> e.json())
    }

    static searchAnimals = (input) => {
        return fetch(`http://localhost:5002/animals?q=${input}`)
        .then(e=> e.json())
    }

    static searchLocations = (input) => {
        return fetch(`http://localhost:5002/locations?q=${input}`)
        .then(e=> e.json())
    }

}
