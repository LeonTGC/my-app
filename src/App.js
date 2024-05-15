// import Person from "./Person"
// import Netflix from "./task/netflix/netflix"
import { useState } from "react"
import Conditional from "./Conditional/Conditional"
import Form from "./Controlled/Forms"
import Counter from "./Counter/Counter"
import StateComponent from "./State/StateComponent"
import Person from "./Person"

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameInput, setNameInput] = useState("")
  const [ageInput, setAgeInput] = useState("")

  const handleClick = (index) => {
    // duplicating the state allows us to change that copied array
    let storedPeople = [...persons]
    // to remove a specific item from an array
    storedPeople.splice(index, 1)
    // updating our persons state
    setPersons(storedPeople)
  }

  const handleSubmit = (e) => {
    // stop the page refreshing 
    e.preventDefault()
    // unpacking the items that are inside the array
    setPersons([...persons, { name: nameInput, age: parseInt(ageInput) }])
    setNameInput("")
    setAgeInput("")
  }
  return (
    <div>
      <Form 
        handleSubmit={handleSubmit} 
        nameInput={nameInput} 
        setNameInput={setNameInput}
        setAgeInput={setAgeInput} 
        ageInput={ageInput} 
      />
      {persons.map((person, index) => {
        return (
          <Person 
            name={person.name} 
            age={person.age} 
            key={index} 
            handleClick={() => handleClick(index)} 
          />
        )
      })}
    </div>
  )
}

export default App


