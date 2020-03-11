import React from 'react';
import axios from 'axios';
import './JobList.css';
import { Table } from 'react-bootstrap';
import Job from '../Job';

class JobList extends React.Component {

  state = {
    id: "",
    jobName: [],
    client: "",
    location: "",
    address: "",
    city: "",
    type: "",
    siteContact: "",
    status: "",
    price: "",
    paid: false,
  }

  componentDidMount = () => {
    // const PORTDB = process.env.PORTDB;
    // console.log("Getting JOB LIST...")
    axios.get(`http://localhost:4000/api/v1/jobs`)
      .then(res=> {
        // console.log('data',res.data);
        this.setState({
          jobName:res.data
        })
        
      })
      .catch( err =>
        console.log(err)
      )
  }

  render() {
    // console.log(this.state.jobName);
    // console.log(this.state.jobName.length);
    let jobs=null;
    jobs = this.state.jobName.map(job => {
      // console.log(job._id)
      return <Job key={job._id} job={job}/>
    })
    // console.log(jobs)
    return(
      <>
        <h4>Trailer List</h4>
        <div className="jobContainer pre-scrollable col-sm-8">
          <Table striped border hover responsive="sm" variant="dark" ml="10px">
            <thead>
              <tr>
                <th>Builder</th>
                <th>Address</th>
                <th>City</th>
                <th>Trailer</th>
              </tr>
            </thead>
            <tbody>
              {jobs}
            </tbody>
          </Table>
        </div>
      </>
    )
  }
}

export default JobList;