import React, { Component } from 'react';
//import ClickCounterTwo from './components/ClickCounterTwo';

type Props = {
    render : (count:number,increment : any) => {}
}
type State = {
    count : number
}

class CounterRenderProp extends Component<Props,State> {
    constructor(props : Props){
        super(props)
  
        this.state = {
            count : 0
        }
        this.increment = this.increment.bind(this)
    }
      increment = () => {
          this.setState( (prev) => {
              return {
                  count : prev.count + 1
              }
          })
      }
    render() {
        return (
            
        <div>{this.props.render(this.state.count,this.increment)}</div>
            
        );
    }
}

export default CounterRenderProp;