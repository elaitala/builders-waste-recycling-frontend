import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Modal } from 'react-bootstrap';
import Dashboard from './components/Dashboard/Dashboard'
import CreateJob from './components/Job/CreateJob/CreateJob'
import JobDetail from './components/Job/JobDetail/JobDetail'
import JobList from './components/Job/JobList/JobList'

import './App.css';



class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  
    this.state = {
      createjobshow: false,
      // signupshow:false,
      currentCityPost:[],
      cities:[]
    };
  }

// Handle OPEN and CLOSE of CREATE JOB
handleShow() {
  this.setState({ createjobshow: true });
}

handleClose() {
  this.setState({ createjobshow: false });
}

handleJobShow() {
  this.setState({ jobdetailshow: true });
}

handleJobClose() {
  this.setState({ jobdetailshow: false });
}

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

        {/* <h4>Job Dashboard:</h4> */}
        <button id="createjobbtn" type="create-job-button" className="btn btn-success mt-1 btn-block" onClick={this.handleShow}>New Job</button>
        
        {/* <button id="pickupreturnbtn" type="pickup-return-button" className="btn btn-primary mt-1 btn-block" onClick={this.handlePickupReturn}>Pickup Return</button>
        
        <button id="returnbtn" type="return-button" className="btn btn-danger mt-1 btn-block" onClick={this.handleReturn}>Return Only</button> */}

        <Dashboard />

        {/* <br/> */}
        {/* <h4>Trailers in the field:</h4> */}
        <JobList />
        <Modal show={this.state.createjobshow} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <h2>New Job</h2>
          </Modal.Header>
          <Modal.Body>
            <CreateJob handleClose={this.handleClose}/>
            <hr />
          </Modal.Body>
        </Modal>
        {/* <Modal show={this.state.jobdetailshow} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <h2>Job Detail</h2>
          </Modal.Header>
          <Modal.Body>
            <JobDetail handleClose={this.handleClose}/>
            <hr />
          </Modal.Body>
        </Modal> */}
          

      </>
    );
  }
}

export default App;
