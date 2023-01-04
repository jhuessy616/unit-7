import React from 'react'
import {useState} from 'react'


function GoingFurtherForm({message}) {
    let [name, setName] = useState({
        firstName: "",
        middleName: "",
        lastName:""
    }
    )
    let [fullMessage, setFullMessage]= useState("")
    let { firstName, middleName, lastName } = name
   let fullName =  firstName +" "  + middleName + " "+ lastName

    function handleSubmit(event) {
        event.preventDefault()
        console.log(message)
        console.log(fullName)
        setFullMessage(message + fullName);
        
        
    }
          

          
    const handleChange=
        (e) => {
            setName({...name, [e.target.name]: e.target.value.trim() })
        };
    
    
    
    
     console.log(name)
        return (
            <div>
                <form>
                    <input name="firstName" onChange={handleChange} placeholder="first name"></input>
                    <input name="middleName" onChange={handleChange} placeholder="middle name"></input>
                    <input name="lastName" onChange={handleChange} placeholder='last name'></input>
                    <button onClick={handleSubmit}>Submit</button>
                    {/* {message} {fullName} */}
                   {fullMessage}
            
                </form>
            </div>  
        )
   
        }

export default GoingFurtherForm