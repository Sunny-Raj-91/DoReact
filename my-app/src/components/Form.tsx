import React, { ChangeEvent, Component, FormEvent } from 'react';


interface FormState{
    name : string,
    email : string
}

interface FormProps{}

class Form extends Component<FormProps,FormState> {
    
    constructor(props:FormProps){
        super(props);
        this.state = {
            name : '',
            email :''
        }
    }

    handleNameChange: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined = (event) =>{
        this.setState({
            name : event.target.value
        })
    }
    handleNameChangemailChange: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined = event =>{
        this.setState({
            email : event.target.value
        })
    }
    handleFormSubmit: ((event: FormEvent<HTMLFormElement>) => void) | undefined = event => {
        console.log(event);
        alert(`${this.state.name}  ${this.state.email}`)
        event.preventDefault()
    }
   
    

    render() {
        return (
            <div>
                <form onSubmit = {this.handleFormSubmit}>
                    <label>Name : </label>
                    <input type='text' value={this.state.name} onChange={this.handleNameChange}></input>
                    <br></br>
                    <label>Email : </label>
                    <input type='email' value = {this.state.email} onChange={this.handleNameChangemailChange}></input>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;