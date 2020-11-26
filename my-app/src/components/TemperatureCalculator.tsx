import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

class TemperatureCalculator extends Component<{},{ctemp : string,ftemp : string,celcius : string,farenheit:string}> {
    boil: string
    
    constructor(props:{}){
        super(props)
        this.boil = ""
        this.state = {
            ctemp : "",
            ftemp : "",
            celcius : "celcius",
            farenheit : "farenheit"
        }
        this.handleTempChange = this.handleTempChange.bind(this)
        
    }
    handleTempChange(e: { target: { value: any; }; },scale : string){
        console.log(this.state)
        if(scale === this.state.celcius){
            
        this.setState(p => {
            
              return { ...p,ctemp:e.target.value,ftemp : (((parseFloat(e.target.value)*9 + 160)/5).toString())}
        })
        
    }
    else 
        this.setState(p=>{
            return {...p,ctemp : (((parseFloat(e.target.value)*5 - 160)/9).toString()),ftemp:e.target.value}
        })
    }


    render() {
        return (
            <div>
                <TemperatureInput scale={this.state.celcius} temp={this.state.ctemp} handleTempChange = {this.handleTempChange} />
                <TemperatureInput scale = {this.state.farenheit} temp={this.state.ftemp} handleTempChange = {this.handleTempChange} />
                <h5>{this.boil = (parseFloat(this.state.ctemp) >= 100) ?  "Water will boil" : "water will not boil"  } </h5>
               
            </div>
        );
    }
}

export default TemperatureCalculator;