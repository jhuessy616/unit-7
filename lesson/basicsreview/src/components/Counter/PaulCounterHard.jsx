import React from 'react'
import "./counter.css"

function PaulCounterHard({ count, setCount }) {
  function decCount() {
        setCount(count - 1)
    }

    function incCount() {
        setCount(count + 1)
    }
  return (
    <div className='counter'>
        <button onClick={decCount}>-</button>
        <span>{count}</span>
        <button onClick={incCount}>+</button>
    </div>
  )
}

export default PaulCounterHard