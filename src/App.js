import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Services from './Components/Services/Services';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Appointment from './Components/Appointment/Appointment';
import Doctors from './Components/Doctors/Doctors';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

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
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/doctors">
                <Doctors></Doctors>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>              
              <PrivateRoute path="/appointment">
                  <Appointment></Appointment>
              </PrivateRoute>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
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
