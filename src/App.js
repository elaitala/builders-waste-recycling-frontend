import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Dashboard from './components/Dashboard/Dashboard'

import './App.css';



class App extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Builders Waste Recycling
          </Navbar.Brand>
        </Navbar>

        <Dashboard />
          
        <h2>Job Dashboard:</h2>

        <h2>Trailers in the field:</h2>
        
      </>
    );
  }
}

export default App;
