import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Dashboard from './components/Dashboard/Dashboard'
import JobList from './components/Job/JobList/JobList'

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

        <br/>
        {/* <h4>Trailers in the field:</h4> */}
        <JobList />
          
        {/* <h4>Job Dashboard:</h4> */}
        <button id="createjobbtn" type="create-job-button" className="btn btn-success mt-1 btn-block" onClick={this.handleCreate}>New Job</button>
        
        {/* <button id="pickupreturnbtn" type="pickup-return-button" className="btn btn-primary mt-1 btn-block" onClick={this.handlePickupReturn}>Pickup Return</button>
        
        <button id="returnbtn" type="return-button" className="btn btn-danger mt-1 btn-block" onClick={this.handleReturn}>Return Only</button> */}

      </>
    );
  }
}

export default App;
