import React from 'react';
// import axios from 'axios';
import './JobList.css';
import { Table } from 'react-bootstrap';
import Job from './Job/Job';

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
    jobData: this.props.jobData
  }

  render() {
    let jobs=null;
    jobs = this.props.jobData.map(job => {
      return <Job getJobs={this.props.getJobs} key={job._id} job={job}/>
    })
    return(
      <>
        <h4>Trailer List</h4>
        <div className="jobContainer pre-scrollable col-sm-8">
          <Table className="trailer" striped hover responsive="sm" variant="dark" ml="10px">
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