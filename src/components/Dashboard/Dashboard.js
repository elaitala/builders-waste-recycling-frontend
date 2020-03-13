import React from 'react';
import './Dashboard.css';
// import axios from 'axios';
import Table from 'react-bootstrap/Table';

class Dashboard extends React.Component {

  state = {
    id: "",
    jobName: [],
    info: [],
    status: "",
    trailerTen: 0,
    trailerFifteen: 0,
    // Hardcoded number of TRAILERS
    totalTen: 163,
    totalFifteen: 59,
    jobData: this.props.jobData
  }

  componentDidMount = () => {
    // Counts TRAILER types on mount
    this.trailerCount()
  }

  componentDidUpdate = (prevProps) => {
    // IF job data differs from previous state then it re-renders
    if(prevProps.jobData !== this.props.jobData){
      console.log('reRENDERING Dashboard...')
      this.trailerCount();
    }
  }

  // Counts TRAILERS of each kind in the field
  trailerCount = () => {
    console.log('TrailerCount...');
    // let data = this.state.info
    let data = this.props.jobData;
    // console.log('DATA', data)
    let trailerTen = 0;
    let trailerFifteen = 0;
    for (let i=0; i<data.length; i++){
      if(data[i].trailer === 10){
        trailerTen++;
        // console.log('Adding Little')
      } else if(data[i].trailer === 15){
        trailerFifteen++;
        // console.log('Adding Big');
      }
      if(i === data.length-1){
        this.setState({
          trailerFifteen, trailerTen
        })
      }
    } 
  }
  
  render () {
    return (
      <>
        <div>
          <Table className="col-sm-8" striped border hover responsive="sm" variant="dark">
            <thead>
              <tr>
                <th>Trailer</th>
                <th>Total</th>
                <th>Out</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10 yd</td>
                <td>{this.state.totalTen}</td>
                <td>{this.state.trailerTen}</td>
                <td>{this.state.totalTen-this.state.trailerTen}</td>
              </tr>
              <tr>
                <td>15 yd</td>
                <td>{this.state.totalFifteen}</td>
                <td>{this.state.trailerFifteen}</td>
                <td>{this.state.totalFifteen-this.state.trailerFifteen}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{this.state.totalTen+this.state.totalFifteen}</td>
                <td>{this.state.trailerTen+this.state.trailerFifteen}</td>
                <td>{this.state.totalTen-this.state.trailerTen+this.state.totalFifteen-this.state.trailerFifteen}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    )  
  }
}

export default Dashboard;