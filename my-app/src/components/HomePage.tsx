import React, { Component } from 'react';

interface HomePageStates {
size : string;
}
interface HomePageProps{

}

class HomePage extends Component<HomePageProps,HomePageStates> {
    
    constructor(props : HomePageProps){
        super(props)
       this.state = {
           size : window.innerWidth.toString()
       }
       //console.log('constructor called')

       
       this.resize = this.resize.bind(this)
    }

     resize = () => {
        
        this.setState({
            size :  (window.innerWidth).toString()
        })
    } 
    componentDidUpdate(){
        //console.log('componentDidUpdate called')
    }
    componentDidMount(){
        //console.log('componentDidMount called')
        window.addEventListener('resize',this.resize)
    }

    componentWillUnmount() {
       //console.log('componentWillUnmount called')
       window.removeEventListener('resize',this.resize);
    }
    

    render() {
    console.log('rendered')
        return (
            <div>
                {this.state.size}
            </div>
        );
    }
}

export default HomePage;