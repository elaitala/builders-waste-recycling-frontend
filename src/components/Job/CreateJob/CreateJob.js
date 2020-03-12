import React from 'react';
import './CreateJob.css';
import axios from 'axios';
import {  Button,
          Col,
          Form,
          FormGroup,
          FormControl,
          FormLabel } from 'react-bootstrap';

class CreateJob extends React.Component {
  state = {
    
    // jobData: {},
    jobName: '',
    client: '',
    location: '',
    address: '',
    city: '',
    type: '',
    siteContact: '',
    trailer: '',
    price: '',
  }
  
  // Updates the STATE of the form
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit = event => {
    // const PORT = process.env.PORTDB;
    event.preventDefault();
    
    console.log('Creating JOB...');
    console.log('Job Data:', this.state);
    
    axios.post(`http://localhost:4000/api/v1/jobs/create`, this.state )
      .then(res => {
        console.log('Inserting JOB into DB...')
        console.log(res)
        console.log(res.data)
        this.props.handleClose();
      })
      .catch(err => {
        console.log(err.response)
        console.log('JOB CREATE Fail...')
      });
  };
    render() {
    console.log('Rendering ADD NEW JOB');
    return (
      <>
      <div>
        <Form>
          {/* JOB NAME entry */}
          <FormGroup>
            {/* <FormLabel>Builder</FormLabel> */}
            <FormControl name="jobName" type="text" placeholder="Job Name" onChange={this.handleChange}/>
          </FormGroup>

          {/* CLIENT entry */}
          <FormGroup>
            {/* <FormLabel>Builder</FormLabel> */}
            <FormControl name="client" type="text" placeholder="Builder" onChange={this.handleChange}/>
          </FormGroup>
          
          {/* LOCATION */}
          <FormGroup>
            {/* <FormLabel>Location</FormLabel> */}
            <FormControl name="location" type="text" placeholder="Location" onChange={this.handleChange}/>
          </FormGroup>
          
          {/* ADDRESS */}
          <FormGroup>
            {/* <FormLabel>Address</FormLabel> */}
            <FormControl name="address" type="text" placeholder="Address" onChange={this.handleChange}/>
          </FormGroup>
          
          {/* CITY */}
          <FormGroup>
            {/* <FormLabel>City</FormLabel> */}
            <FormControl name="city" type="text" placeholder="City" onChange={this.handleChange}/>
          </FormGroup>
         
          {/* TYPE of job */}
          <FormGroup>
            {/* <FormLabel>Type of Job</FormLabel> */}
            <FormControl name="type" type="text" placeholder="Type of Job" onChange={this.handleChange}/>
          </FormGroup>
         
          {/* SITE CONTACT */}
          <FormGroup>
            {/* <FormLabel>Site Contact</FormLabel> */}
            <FormControl name="siteContact" type="text" placeholder="Site Contact" onChange={this.handleChange}/>
          </FormGroup>
         
          {/* TRAILER */}
          <FormGroup>
            {/* <FormLabel>City</FormLabel> */}
            <FormControl name="trailer" type="text" placeholder="Trailer" onChange={this.handleChange}/>
          </FormGroup>
         
          {/* PRICE */}
          <FormGroup>
            {/* <FormLabel>Price</FormLabel> */}
            <FormControl name="price" type="number" placeholder="Price" onChange={this.handleChange}/>
          </FormGroup>
         
         {/* SUBMIT button */}
          <FormGroup>
            <Col sm={10}>
              <Button value='Submit' type='submit' onClick={this.handleSubmit} >Add New Job</Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
      </>
    );
  }
}
export default CreateJob;
