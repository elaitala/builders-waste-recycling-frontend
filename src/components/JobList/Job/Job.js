import React from 'react';
import axios from 'axios';
import {  Modal,
          // Button,
          // Col,
          Form,
          FormGroup,
          FormControl,
          // FormLabel
        } from 'react-bootstrap';
import './Job.css';
// import JobDetail from './JobDetail/JobDetail'

class Job extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  
    this.state = {
      jobName: this.props.job.jobName,
      client: this.props.job.client,
      location: this.props.job.location,
      address: this.props.job.address,
      city: this.props.job.city,
      type: this.props.job.type,
      siteContact: this.props.job.siteContact,
      trailer: this.props.job.trailer,
      price: this.props.job.price,
      
      jobdetailshow: false,
      jobData: this.props.job,
      editing: false

    };
  }
  
  // Updates the STATE of the form
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleShow() {
    this.setState({ jobdetailshow: true });
  }
  
  handleClose() {
    this.setState({ jobdetailshow: false });
  }
  
  handlePickupReturn = () => {
    console.log('Pickup Return...')
    axios.put(`http://localhost:4000/api/v1/jobs/${this.props.job._id}`)
      .then(res => {
        console.log(res)
        this.handleClose();
      })
      .catch(err => {
        console.log('PICKUP RETURN failed...')
        console.log(err.response)
      })
  }
  
  handlePickupOnly = () => {
    console.log('Pickup Only...');
    axios.delete(`http://localhost:4000/api/v1/jobs/${this.props.job._id}`)
      .then(res => {
        console.log(res)
        this.handleClose();
        // Refreshes AXIOS JOB DATA on create
        this.props.getJobs();
        })
      .catch(err => {
        console.log('DELETE failed...')
        console.log(err.response)
      })
  }

  showJobDetail = () => {
    console.log('Show JOB...')
    console.log(this.props.job._id)
  }

  handleEditJob = (event) => {
    event.preventDefault();
    this.setState({ editing: true })
    console.log('Edit?', this.state.editing)
  }

  handleEditSubmit = (event) => {
    event.preventDefault();

    console.log('Submitting UPDATE...');
    console.log('Job Data:', this.state);
    console.log('State.jobData:', this.state.jobData);

    axios.put(`http://localhost:4000/api/v1/jobs/${this.props.job._id}`, this.state)
      .then(res => {
        console.log('Inserting JOB into DB...')
        console.log(res)
        console.log(res.data)
        this.setState({jobData: res.data})
        this.setState({ editing: false })
        // this.handleClose();
        // Refreshes AXIOS JOB DATA on create
        this.props.getJobs();
        console.log('Updated state:', this.state)
      })
      .catch(err => {
        console.log('UPDATE failed...')
        console.log(err.response)
      })
  }
  
  render() {
    // console.log(this.state.jobData);
    return (
      <>
        {/* <tr onClick={this.showJobDetail}> */}
        <tr onClick={this.handleShow}>
          <td>{this.props.job.client}</td>
          <td>{this.props.job.address}</td>
          <td>{this.props.job.city}</td>
          <td>{this.props.job.trailer}</td>
        </tr>
        <Modal show={this.state.jobdetailshow} onHide={this.handleClose} variant="dark">
          <Modal.Header closeButton>
            <div className="row">
              <div className="col">
                <h2>Job Detail</h2>
              </div>
              <div className="col">
                <>
                {!this.state.editing &&
                  <button id="editJob" type="edit-job-button" className="btn btn-primary mt-1 btn-block" onClick={this.handleEditJob}>Edit</button>
                }
                {this.state.editing && 
                  <button id="editJob" type="edit-job-button" className="btn btn-primary mt-1 btn-block" onClick={this.handleEditSubmit}>Save</button>
                }
                </>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <>
            {!this.state.editing &&
              <div>
                <div>
                  <p>{this.props.job.client}</p>
                  <p>{this.props.job.location}</p>
                  <p>{this.props.job.address}</p>
                  <p>{this.props.job.city}</p>
                  <hr />
                  <p>Job Type: {this.props.job.type}</p>
                  <p>Contact: {this.props.job.siteContact}</p>
                  <p>{this.props.job.trailer} yd trailer</p>
                  <hr />
                  <p>Price: ${this.props.job.price}</p>
                  <p>Paid: {this.props.job.paid}</p>
                  <p>Dropped: {new Date(this.props.job.createdAt).toUTCString().slice(5, 16)}</p>
                </div>
                <hr />
                <div className="row">
                  <div className="col">
                    <button id="pickupreturn" type="pickup-return-button" className="btn btn-success mt-1 btn-block" onClick={this.handlePickupReturn}>Pickup Return</button>
                  </div>
                  <div className="col">
                    <button id="pickuponly" type="pickup-only-button" className="btn btn-danger mt-1 btn-block" onClick={this.handlePickupOnly}>Pickup Only</button>
                  </div>
                </div>
              </div>
            }
            {this.state.editing && 
              <div>
                <Form>
                  {/* JOB NAME entry */}
                  <FormGroup>
                    {/* <FormLabel>Builder</FormLabel> */}
                    <FormControl name="jobName" type="text" defaultValue={this.props.job.jobName} placeholder="Job Name" onChange={this.handleChange}/>
                  </FormGroup>
        
                  {/* CLIENT entry */}
                  <FormGroup>
                    {/* <FormLabel>Builder</FormLabel> */}
                    <FormControl name="client" type="text" defaultValue={this.props.job.client} placeholder="Builder" onChange={this.handleChange}/>
                  </FormGroup>
                  
                  {/* LOCATION */}
                  <FormGroup>
                    {/* <FormLabel>Location</FormLabel> */}
                    <FormControl name="location" type="text" defaultValue={this.props.job.location} placeholder="Location" onChange={this.handleChange}/>
                  </FormGroup>
                  
                  {/* ADDRESS */}
                  <FormGroup>
                    {/* <FormLabel>Address</FormLabel> */}
                    <FormControl name="address" type="text" defaultValue={this.props.job.address} placeholder="Address" onChange={this.handleChange}/>
                  </FormGroup>
                  
                  {/* CITY */}
                  <FormGroup>
                    {/* <FormLabel>City</FormLabel> */}
                    <FormControl name="city" type="text" defaultValue={this.props.job.city} placeholder="City" onChange={this.handleChange}/>
                  </FormGroup>
                
                  {/* TYPE of job */}
                  <FormGroup>
                    {/* <FormLabel>Type of Job</FormLabel> */}
                    <FormControl name="type" type="text" defaultValue={this.props.job.type} placeholder="Type of Job" onChange={this.handleChange}/>
                  </FormGroup>
                
                  {/* SITE CONTACT */}
                  <FormGroup>
                    {/* <FormLabel>Site Contact</FormLabel> */}
                    <FormControl name="siteContact" type="text" defaultValue={this.props.job.siteContact} placeholder="Site Contact" onChange={this.handleChange}/>
                  </FormGroup>
                
                  {/* TRAILER */}
                  <FormGroup>
                    {/* <FormLabel>City</FormLabel> */}
                    <FormControl name="trailer" type="text" defaultValue={this.props.job.trailer} placeholder="Trailer" onChange={this.handleChange}/>
                  </FormGroup>
                
                  {/* PRICE */}
                  <FormGroup>
                    {/* <FormLabel>Price</FormLabel> */}
                    <FormControl name="price" type="number" defaultValue={this.props.job.price} placeholder="Price" onChange={this.handleChange}/>
                  </FormGroup>
                
                  {/* <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Button value='Submit' type='submit' onClick={this.handleEditSubmit} >Save</Button>
                    </Col>
                  </FormGroup> */}
                  
                </Form>
              </div>
            }          
          </>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default Job

// import React, { Component } from "react";
// import Modal from 'react-bootstrap/Modal';
// import {
//   Button,
//   Col,
//   Form,
//   FormGroup,
//   FormControl,
//   FormLabel
// } from 'react-bootstrap';
// import { NavLink, Link } from 'react-router-dom';
// import CreatePost from '../../Landing/CityPosts/CreatePost/CreatePost'
// import axios from "axios";
// import jwt from "jsonwebtoken";

// class Post extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       postData: this.props.post,
//       showbtn: "none",
//       deleted: false,
//       editting: false,
//       tempPostData: null
//     }
//     // this.checkCurrentUser();
//   }
//   handleTitle = (e) => {
//     const value = e.target.value;
//     this.setState({
//       postData: {
//         ...this.state.postData,
//         title: value
//       }
//     })
//   }

//   handleContent = (e) => {
//     const value = e.target.value;
//     this.setState({
//       postData: {
//         ...this.state.postData,
//         content: value
//       }
//     })
//   }
//   handleEdit = (event) => {
//     event.preventDefault();
//     this.setState({ editting: true })
//   }


//   handleDelete = (event) => { 
//     const PORT = process.env.PORT;
//     axios.delete(`http://localhost:${PORT}/api/v1/posts/${this.props.post._id}`, {
//       headers: { "authorization": `bearer ${localStorage.getItem('jwt')}` }
//     })
//       .then(res => {
//         console.log(res)
//         this.setState({
//           deleted: true
//         })

//       })
//       .catch(err => {

//         console.log(err)
//       })
//   }

//   checkCurrentUser = () => {
//     let userId = jwt.decode(localStorage.getItem('jwt')).foo
//     // console.log('userId',userId)
//     if (this.props.post.user) {
//       console.log('it exist')
//       console.log('this.user', this.props.post.user._id)
//       console.log('userId',userId)
//       console.log('the same', this.props.post.user._id == userId)
//       if (this.props.post.user._id == userId) {
//           console.log('the same', this.props.post.user._id == userId)
        
//         this.setState({
//           showbtn: "block"
//         })
//         console.log(this.state)
//       }
//     }
   
//   }
//   handleEditSubmit = (event) => {
//     const PORT = process.env.PORT;
//     event.preventDefault();
//     axios.put(`http://localhost:${PORT}/api/v1/posts/${this.state.postData._id}`, this.state.postData, {
//       headers: { "authorization": `bearer ${localStorage.getItem('jwt')}` }
//     })
//       .then(res => {
//         this.setState({tempPostData: res.data})
//         this.setState({ editting: false })
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }

//   render() {
//     let userId = jwt.decode(localStorage.getItem('jwt')).foo;
//     return (<>{!this.state.deleted && <>
//         <div className="card mt-4 mb-3 ml-5 shadow p-3 bg-white rounded" >
//           <div className="row no-gutters">
//             <div className="col-lg-4">
//               <img src={this.state.postData ? this.state.postData.img : "https://i.ibb.co/tMG6d9p/images.jpg"} className="card-img" />
//               <Link to={{
//                 pathname: '/postdetail/' + this.state.postData._id,
//                 state: {
//                   id: this.state.postData._id
//                 }
//               }} >
//                 <button type="detail-button" className="btn btn-outline-dark mt-3 btn-block" >Post Detail</button>
//               </Link>
//               {(this.props.post.user && userId === this.props.post.user._id) && <>
//                 <button id="editbtn" type="edit-button" className="btn btn-outline-primary mt-1 btn-block" onClick={this.handleEdit}>Edit Post</button>
//                 <button type="delete-button" id="deletebtn" className="btn btn-outline-danger mt-1 btn-block" onClick={this.handleDelete}>Delete Post</button>
//               </>}

//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h3 className="card-title">{(this.state.tempPostData&&this.state.tempPostData.title) || this.props.post.title}</h3>
//                 {(this.state.tempPostData)?
//                 <p className="text-muted">{this.state.tempPostData.location.city}, {this.state.tempPostData.location && this.state.tempPostData.location.country}</p>:
//                 <p className="text-muted">{this.props.post.location && this.props.post.location.city}, {this.props.post.location && this.props.post.location.country}</p>}
//                 <p className="card-text">{(this.state.tempPostData&&this.state.tempPostData.content) || this.props.post.content}</p>
//                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//               </div>
//             </div>
//           </div>
//           {this.state.editting && 
//           <div>
//             <Form>
//               {/* CITY SELECT functionality */}

//               {/* TITLE functionality */}
//               <FormGroup>
//                 <FormLabel>Title</FormLabel>
//                 <FormControl id="title" type="text" placeholder="Title" value={this.state.postData.title} onChange={this.handleTitle} />
//               </FormGroup>
//               {/* TEXT AREA functionality */}
//               <FormGroup>
//                 <FormLabel>Post</FormLabel>
//                 <FormControl id="content" as="textarea" rows="5" placeholder="Adventure goes here" value={this.state.postData.content} onChange={this.handleContent} />
//               </FormGroup>
//               {/* Add a PICTURE functionality */}
//               {/* <div className="form-group">
//           <label id="picture" for="exampleFormControlFile1">City Picture</label>
//           <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
//         </div> */}
//               <FormGroup>
//                 <Col smOffset={2} sm={10}>
//                   <Button value='Submit' type='submit' onClick={this.handleEditSubmit} >Submit</Button>
//                 </Col>
//               </FormGroup>
//             </Form>
//           </div>}
//         </div>
//       </>}</>)
//   }
// }

// export default Post;
