
import React, { Component } from 'react';
import ChildRef from './ChildRef';

type ParentRefProp ={}

class ParentRef extends Component<ParentRefProp,{}> {
    //inputRef: React.RefObject<HTMLInputElement>;
    ComponentRef: React.RefObject<ChildRef>;
    
    constructor(props : ParentRefProp){
        super(props)
        //this.inputRef = React.createRef()
        this.ComponentRef = React.createRef()
    }
    clickHandler = ()=>{
        //this.inputRef.current?.focus()
        this.ComponentRef.current?.focusInput()
    }
    render() {
        return (
            <div>
                {/* <input type='text' ref={this.inputRef}/> */}
                <ChildRef ref = {this.ComponentRef}/>
                <input type = 'button' value='focus input' onClick={this.clickHandler}/>
            </div>
        );
    }
}

export default ParentRef;