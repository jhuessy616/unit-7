import React from 'react'

function Welcome(props) {
    console.log(props)
    // ! Props are READ ONLY!
    // props.name = "John"

    function removeName() {
        const updatedNames = props.allNames.filter(name => name !== props.name)
        props.updateNames(updatedNames)
    }

  return (
    <div onClick={removeName} className='welcome'>Welcome, {props.name}</div>
  )
}

export default Welcome

// !another way destructuring object

// function Welcome({ name }) {
    
//   return (
//       <div className="welcome">Welcome, {name}</div>
//   )
// }

