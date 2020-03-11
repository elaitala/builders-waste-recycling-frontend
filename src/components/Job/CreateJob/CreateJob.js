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
    
    jobData: {},
  }
  // AXIOS call for all CITIES
  // componentDidMount = () => {
  //   const PORT = process.env.PORT;
  //   axios.get(`http://localhost:${PORT}/api/v1/location`)
  //     .then(res=> {
  //       console.log(res.data.AllLocation)
  //       this.setState({
  //         cities:res.data.AllLocation
  //       })
  //     })
  //   }
  
  // Updates JOB CITY
  // handleCity = (e) => {
  //   console.log(e.target.value)
  //   let index = e.nativeEvent.target.selectedIndex;
  //   this.setState({
  //     jobData: {
  //       ...this.state.jobData,
  //       location: {
  //         _id: e.target.value,
  //         city: e.nativeEvent.target[index].text
  //       }
  //     }
  //   })
  // }
  
  // Updates POST TITLE
  handlePostTitle = event => {
    let value = event.target.value;
    this.setState({
      userData: {
        ...this.state.userData,
        title: value
      }
    });
  }
  
  // Updates POST BODY
  handlePostContent = event => {
    let value = event.target.value;
    this.setState({
      userData: {
        ...this.state.userData,
        content: value
      }
    });
  }

  handleImg = event => {
    let value = event.target.value;
    this.setState({
      userData: {
        ...this.state.userData,
        img: value
      }
    })
  }
  handleSubmit = event => {
    // const PORT = process.env.PORTDB;
    event.preventDefault();
    console.log('Creating JOB...');
    console.log('bodytosend', this.state.jobData);
    // document.getElementById('location').disabled = "null";
    document.getElementById('title').disabled = "null";
    document.getElementById('content').disabled = "null";
    // document.getElementById('picture').disabled = "null";
    axios.post(`http://localhost:4000/api/v1/jobs/create`, this.state.userData )
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
    console.log('Rendering new JOB');
    return (
      <>
      <div>
        <Form>
          {/* CLIENT entry */}
          <FormGroup>
            <FormLabel>Title</FormLabel>
            <FormControl id="title" type="text" placeholder="Title" onChange={this.handlePostTitle}/>
          </FormGroup>
          
          {/* ADDRESS */}
          <FormGroup>
            <FormLabel>Post</FormLabel>
            <FormControl id="content" as="textarea" rows="5" placeholder="Adventure goes here" onChange={this.handlePostContent}/>
          </FormGroup>
          
          {/* Add a PICTURE functionality */}
          <FormGroup>
            <FormLabel>City Picture</FormLabel>
            <FormControl id="img" type="text" placeholder="photo url" onChange={this.handleImg}/>
          </FormGroup>
         
         {/* SUBMIT button */}
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button value='Submit' type='submit' onClick={this.handleSubmit} >Submit</Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
      </>
    );
  }
}
export default CreatePost;
