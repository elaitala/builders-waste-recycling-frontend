import React from 'react';
import './JobDetail.css';

class JobDetail extends React.Component {

  state = {
    jobData: this.props.job
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <p>{this.props.job.client}</p>
        <p>{this.props.job.address}</p>
        <p>{this.props.job.city}</p>
        <p>{this.props.job.trailer}</p>
      </div>
    )
  }
}

export default JobDetail;