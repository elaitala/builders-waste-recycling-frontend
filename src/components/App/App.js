import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Modal } from 'react-bootstrap';
import Dashboard from '../Dashboard/Dashboard'
import CreateJob from '../JobList/CreateJob/CreateJob'
// import JobDetail from './components/Job/JobDetail/JobDetail'
import JobList from '../JobList/JobList'

import './App.css';



class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  
    this.state = {
      createjobshow: false,
      jobdata: [],
    };
  }

  componentDidMount = () => {
    this.getJobs()
  }

  // componentDidUpdate = (prevProps) => {
  //   if(prevProps.jobData !== this.props.jobData){
  //     console.log('reRENDERING Joblist...')
  //     this.getJobs();
  //   }
  // }

  // AXIOS call to get all JOBS
  getJobs = () => {
    axios.get(`http://localhost:4000/api/v1/jobs`)
    .then(res=> {
      // console.log('data',res.data);
      this.setState({
        jobData: res.data
      })
    })
    .catch( err =>
      console.log(err.response)
    )
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
              src="https://i.imgur.com/b7Y9TMm.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Builders Waste Recycling
          </Navbar.Brand>
        </Navbar>

        {/* Create JOB button */}
        <div className="create-job col mb-1">
          <button id="createjobbtn" type="create-job-button" className="btn btn-success mt-1 btn-block" onClick={this.handleShow}>+ New Job</button>
        </div>
        
        {/* DASHBOARD */}
        <div className="dashboard">
          { this.state.jobData && <Dashboard jobData={this.state.jobData} /> }
        </div>
        {/* <br/> */}

        {/* TRAILER list */}
        <div className="job-list">
          { this.state.jobData && <JobList getJobs={this.getJobs} jobData={this.state.jobData} /> }

          <Modal show={this.state.createjobshow} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <h2>New Job</h2>
            </Modal.Header>
            <Modal.Body>
              <CreateJob getJobs={this.getJobs} handleClose={this.handleClose}/>
              <hr />
            </Modal.Body>
          </Modal>
        </div>
          
        <footer>&copy; BWR LLC 2020</footer>
      </>
    );
  }
}

export default App;
