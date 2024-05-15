const Person = ({ name, age, handleClick }) => {
    return (
        <div>
            <h1>my name is {name}</h1>
            <p>I am {age}</p>
            <button onClick={handleClick}>delete</button>
        </div>
    )
}

export default Person

