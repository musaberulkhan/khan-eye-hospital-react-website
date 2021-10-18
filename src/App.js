import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="app">

      <Router>
        <Navigation></Navigation>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
