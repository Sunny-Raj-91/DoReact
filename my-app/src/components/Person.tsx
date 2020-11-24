import React from 'react'

interface PersonsProps{
    person :{
    name : string,
    age : number,
    skill : string
    }
    
}

function Persons(props : PersonsProps)  {
    return(
        <div>
            
            <h1>{props.person.name}</h1>
            <h3>{props.person.age}</h3>
            <h4>{props.person.skill}</h4>
            
        </div>
    )
}
export default Persons