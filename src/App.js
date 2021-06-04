import Home from './Home';
import About from './About';
import Nav from './Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div>
        <Nav/>
        <Route path="/home" exact component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
    
  );
}

export default App;
