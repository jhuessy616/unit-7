import React from 'react'
import "./counter.css"

function Counter(props) {
    function countUp() {
       props.updateCounter( props.counter + 1)
    }
    function countDown() {
             props.updateCounter(props.counter-1)
}
    return (
        <> 
            <div className='container'>
            <button className="plus" onClick={countUp }>+</button>
            <div className='counter'>{props.counter}</div>
            <button className="minus"onClick={countDown}>-</button>
</div>
            </>
  )
}

export default Counter
