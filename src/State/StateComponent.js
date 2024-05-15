import { useState } from "react"

const StateComponent = () => {
    const [persons, setPersons] = useState([
        { name: 'Dave', age: 33 },
        { name: 'Karen', age: 45 },
        { name: 'Steve', age: 40 },
    ])

    const deleteHandler = (index) => {
        // make a copy of the array
        let storedPersons = [...persons]
        // made changes - remove an item from a specific position
        storedPersons.splice(index, 1)
        // update our state with a new value
        setPersons(storedPersons)
    }

    return (
        <div>
            <div>
                {persons.map((person, index) => {
                    return <Person 
                        name={person.name}
                        age={person.age}
                        handleClick={() => deleteHandler(index)}
                        />
                })}
            </div>
        </div>
    )
}

const Person = ({ name, age, handleClick }) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <button onClick={handleClick}>delete</button>
        </div>
    )
}
export default StateComponent