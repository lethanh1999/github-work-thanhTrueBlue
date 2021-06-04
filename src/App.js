import './styles/app.css';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div className="App1">
        <Nav/>
        <Route path="/home" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Redirect to="/home" />
      </div>
    </Router>
    
  );
}

export default App;
