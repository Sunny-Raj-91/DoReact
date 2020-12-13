

import React from 'react';
type Props = {
    count : number
    increment : ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
    stopIncrement : ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
};
type State = {
  
};
class ClickCounterTwo extends React.Component<Props, State>{


    render() {
        const {count,increment,stopIncrement } = this.props
    return (
      <div>
          <button onClick = {increment} onMouseUpCapture = {stopIncrement}>Clicked {count} times</button>
      </div>
    );
  };
};

export default ClickCounterTwo