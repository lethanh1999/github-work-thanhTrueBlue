import React from "react";
import Home from './Home';
import About from './About';
import Nav from './Nav';
import './App1.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App1 extends React.Component {
    constructor(props){
    super(props);
    this.state = {Bongda : 1};
    }
    
    render(){
       return(
            <Router>
                <div className="App1">
                    <Nav/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
           </Router>
       )
    }
}
export default App1;