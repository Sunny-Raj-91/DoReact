
import React, { Component } from 'react';
//import ClickCounterTwo from './components/ClickCounterTwo';

type Props = {
    render : (count:number,increment : any,stopIncrement : any) => {}
}
type State = {
    count : number,
    
}

class CounterRenderProp extends Component<Props,State> {
    
    constructor(props : Props){
        super(props)
  
        this.state = {
            count : 0,
           
        }
        this.increment = this.increment.bind(this)
    }

      static timer: NodeJS.Timeout
      increment = () => {
       CounterRenderProp.timer  =   setInterval(()=>{
              this.setState( (prev) => {
              return {...prev,
                  count : prev.count + 1
              }
          })
          },5)
      }
      stopIncrement = () => {
          clearInterval(CounterRenderProp.timer)
      }
    render() {
        return (
            
        <div>{this.props.render(this.state.count,this.increment,this.stopIncrement)}</div>
            
        );
    }
}

export default CounterRenderProp;