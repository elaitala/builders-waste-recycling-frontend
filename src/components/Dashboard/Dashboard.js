import React from 'react';
import './Dashboard.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

class Dashboard extends React.Component {

  state = {
    id: "",
    jobName: [],
    info: [],
    status: "",
    littleT: 0,
    bigT: 0,
    // Hardcoded number of TRAILERS
    totalTen: 163,
    totalFifteen: 59
  }

  componentDidMount = () => {
    // const PORTDB = process.env.PORTDB;
    // console.log("Getting number of JOBS...")
    axios.get(`http://localhost:4000/api/v1/jobs`)
      .then(res=> {
        // console.log('data',res.data);
        this.setState({
          info:res.data
        }, () => {
          this.trailerCount()
        })
        
      })
      .catch( err =>
        console.log(err)
      )
  }
  // Counts TRAILERS of each kind in the field
  trailerCount = () => {
    let data = this.state.info
    let littleT = 0;
    let bigT = 0;
    for (let i=0; i<data.length; i++){
      if(data[i].trailer === 10){
        littleT++;
        // console.log('Adding Little')
      } else if(data[i].trailer === 15){
        bigT++;
        // console.log('Adding Big');
      }
      if(i === data.length-1){
        this.setState({
          bigT, littleT
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
                <td>{this.state.littleT}</td>
                <td>{this.state.totalTen-this.state.littleT}</td>
              </tr>
              <tr>
                <td>15 yd</td>
                <td>{this.state.totalFifteen}</td>
                <td>{this.state.bigT}</td>
                <td>{this.state.totalFifteen-this.state.bigT}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{this.state.totalTen+this.state.totalFifteen}</td>
                <td>{this.state.littleT+this.state.bigT}</td>
                <td>{this.state.totalTen-this.state.littleT+this.state.totalFifteen-this.state.bigT}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    )  
  }
}

export default Dashboard;