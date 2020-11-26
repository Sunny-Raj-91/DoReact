import React, { Component } from 'react';
import HOCounter from './withCounter';

type HoverCounterProps = {
    count : number,
    incrementCount() : void
}
type HoverCounterState = {
 
}

class HoverCounter extends Component<HoverCounterProps,HoverCounterState> {
    constructor(props : HoverCounterProps){
        super(props)

    }



    render() {
        return (
            <div>
                <h2 onMouseOver = {this.props.incrementCount}>hovered {this.props.count} times</h2>
            </div>
        );
    }
}



export default HOCounter( HoverCounter);