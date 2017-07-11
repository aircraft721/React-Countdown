import React, {Component} from 'react';
import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'October 23, 2017'
        }
    }


    changeDeadline(){
        this.setState({
            deadline: 'November 25, 2017'
        })
    }



    render(){
        return(
            <div className='app'>
                <div className='app-title'>Countdown to {this.state.deadline}</div>
                <div>
                    <div className='clock-days'>14 days</div>
                    <div className='clock-hours'>30 hours</div>
                    <div className='clock-minutes'>15 minutes</div>
                    <div className='clock-seconds'>20 seconds</div>
                </div>
                <div>
                    <input type="text" placeholder='new date'/>
                    <button onClick={()=>this.changeDeadline()}>Submit</button>
                </div>
               
            </div>
        )
        
    }
}

export default App;