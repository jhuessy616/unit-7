import React from 'react'
import {useState} from 'react'
// import Input from './Input'

function Form({message}) {
    let [firstName, setFirstName] = useState("")
        let[middleName, setMiddleName] =useState("")
    let [lastName, setLastName] = useState("")
    let fullName =  firstName +" "  + middleName + " "+ lastName
          
    return (
        <div>
      <form>
            <input onChange={(e) => { setFirstName(e.target.value.trim()) }} placeholder="first name"></input>
            <input onChange={(e) => { setMiddleName(e.target.value.trim()) }} placeholder="middle name"></input>
                <input onChange={(e) => { setLastName(e.target.value.trim()) }} placeholder='last name'></input>
              
            
            </form>
            {message} {fullName}
        </div>
  )
}

export default Form