// !easy version within counter file rather than app.jsx

import React from 'react'
import { useState } from 'react'

// TODO: Build out a Counter component which will have two buttons + and - and a span element that will take its value from a count state variable. Create two functions that will work as onclick event listeners. They will increment and decreement the counter.
  // TODO: HARD MODE Leave the count inside App.jsx.
  // TODO: 15 mins 42ish

function PaulCounter() {
    
    // ? useState can take raw value but also a callback function
    // ? raw value <useState(iCount()) will recalculate value every time
    // ? callback function renders initial value ONCE <useState(() => 4)

    // function iCount() {
    //     console.log("Runs during every rerender")
    //     return 4
    // }

    let [ count, setCount ] = useState(0)

    // let [ count, setCount ] = useState(() => {
    //     console.log("Runs only once")
    //     return 4
    // })

    function decrementCount() {
        // setCount(count - 1)
        
        setCount(prevCount => prevCount - 1)

        // ? prevCount is a parameter allowing access to prior value before rerender
        // ? syntactically it has to be prev<State>
    }

    function incrementCount() {
        setCount(count + 1)
    }
    
  return (
    <div className='counter'>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default PaulCounter