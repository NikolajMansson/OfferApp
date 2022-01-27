import Navbar from './components/Navbar';
import Home from './Home';
import Cart from './components/Cart';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>  
        </Switch>
      </div>
    </Router>
      
  );
}

export default App;
