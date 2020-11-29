import React from 'react'

type TempInputProps = {
    temp : string,
    scale : string,
    handleTempChange : (event: React.ChangeEvent<HTMLInputElement>, s : string) => void
}

const TemperatureInput = function(props : TempInputProps){
    return (
        <div>
            <h1>Temperature in {props.scale}</h1>
            <input type='text' value = {props.temp} onChange = {(e) => props.handleTempChange(e,props.scale)}/>
        </div>
        
    )
}

export default TemperatureInput