import { useState } from "react"

const Conditional = () => {
    const [display, setDisplay] = useState(false)

    return (
        <div>
            {   display ? <Card /> : <h1>not showing</h1>}
            <button onClick={() => setDisplay(!display)}>click me</button>
        
        </div>
    )

}

const Card = () => {
    return (
        <div>
            <h1>SHOWING</h1>
        </div>
    )
}
export default Conditional



// if(display) {
//     return <Card />
// }
// return (
//     <div>
//         <h1>not showing...</h1>
//     </div>
// )

// return (
//     <div>
//         {display ? <Card /> : <p>not displayed</p>}
//     </div>
// )