import React from 'react'
import Persons from './Person'


function  NameList(){
    const names = [
        {name : 'Clark', age : 20, skill : 'Angular'},
        {name : 'Bruce', age : 24, skill : 'Vue'},
        {name : 'Diana', age : 19, skill : 'React'}
        
        ]
    return(
        <div>
            {
                names.map((person,key)=>
                <Persons key={key} person={person}  />
                )
            }
        </div>
    )
}
export default NameList