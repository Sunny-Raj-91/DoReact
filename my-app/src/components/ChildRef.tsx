import React, { Component } from 'react';

type ChildRefProps = {}

class ChildRef extends Component<ChildRefProps> {
    inputRef: React.RefObject<HTMLInputElement>;
    constructor(props : ChildRefProps){
            super(props)
            this.inputRef = React.createRef<HTMLInputElement>()
    }

    focusInput(){
        this.inputRef.current?.focus();
    }
    render() {
        return (
            <div>
                <input type = 'text' ref={this.inputRef} />
            </div>
        );
    }
}

export default ChildRef;