

import React from 'react';
type Props = {
    count : number
    increment : ((event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void) | undefined
    stopIncrement : ((event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void) | undefined
};
type State = {
 
};
class HoverCountertTow extends React.Component<Props, State>{
     

    render() {
        const {count,increment,stopIncrement } = this.props
    return (
      <div>
          <h1 onMouseOver = {increment} onMouseLeave = {stopIncrement}> Hovered {count} times</h1>
      </div>
    );
  };
};

export default HoverCountertTow