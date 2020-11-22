
import React, { Component } from 'react'

interface IHelloProps{
    name:string;
    click:any;
    fn:(message:string)=>void;
}
interface IHelloState{
    message:string;
}
 
// type HelloProps ={
//     name:string;
// }

class Hello extends Component<IHelloProps,IHelloState>{
    name: string;
    click:any; 
    
    
    constructor(props:IHelloProps){
        super(props);
        this.name = this.props.name;

        this.state={
             message : 'lol',
        }
        
    }

    
    
    render(){
        return(
            <div>
            <div>Hello {this.name}</div>
            <button onClick = {()=>this.props.fn(this.state.message)} >click me</button>
            </div>
        )
    }
}
export default Hello;