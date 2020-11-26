import React, { Component } from 'react'
type CounterProps = {}

type CounterState = {
    count : number
}



const HOCounter = (OriginalComponent : any) => { class Counter extends Component<CounterProps,CounterState> {

    constructor(props : CounterProps){
            super(props)

            this.state = {
                count : 0
            }
            this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount(){
        this.setState((prevState)=>{
            return{count : prevState.count+1}
        })
    }
    render() {
        return (
            <OriginalComponent count = {this.state.count} incrementCount = {this.incrementCount} />
        );
        
    }
    
}
return Counter
}
export default HOCounter


            