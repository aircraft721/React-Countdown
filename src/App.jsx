import React, {Component} from 'react';
import Clock from './Clock';
import './app.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'October 23, 2017',
            newDeadline: ''
        }
    }


    changeDeadline(){
        this.setState({
            deadline: this.state.newDeadline
        });
    }



    render(){
        return(
            <div className='app'>
                <div className='app-title'>Countdown to {this.state.deadline}</div>
                <Clock />
                <div>
                    <input 
                        type="text" 
                        placeholder='new date'
                        onChange={(event)=>this.setState({
                            newDeadline: event.target.value
                        })}/>
                    <button onClick={()=>this.changeDeadline()}>Submit</button>
                </div>
               
            </div>
        )
        
    }
}

export default App;