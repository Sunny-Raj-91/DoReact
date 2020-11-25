import React from 'react'
//import Persons from './Person'


function  NameList(){
    const names = [
        {name : 'Clark', age : 20, skill : 'Angular'},
        {name : 'Bruce', age : 24, skill : 'Vue'},
        {name : 'Diana', age : 19, skill : 'React'}
        
        ]
    return(
        <React.Fragment>
            {
                names.map((name,i) => <React.Fragment key={i}>
                <h1>{name.name}</h1>
                <h4>{name.age}</h4>
                <h4>{name.skill}</h4>
                </React.Fragment>)
            }
        </React.Fragment>
        );
}
export default NameList