import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Services from './Components/Services/Services';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Router>
          <div>
            <Navigation></Navigation>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer></Footer>
      </div>      
    </AuthProvider>
  );
}

export default App;
