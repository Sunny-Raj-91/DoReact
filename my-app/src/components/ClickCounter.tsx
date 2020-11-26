
import React, { Component } from 'react';
import HOCounter from './withCounter';

type ClickCounterProps = {
    count : number,
    incrementCount() : void
}
type ClickCounterState = {
}

class ClickCounter extends Component<ClickCounterProps,ClickCounterState> {




    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}>Clicked {this.props.count} times</button>
            </div>
        );
    }
}

export default HOCounter(ClickCounter);