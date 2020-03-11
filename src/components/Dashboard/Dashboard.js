import React from 'react';
import './Dashboard.css';
import Table from 'react-bootstrap/Table';

class Dashboard extends React.Component {

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
                <td>150</td>
                <td>140</td>
                <td>10</td>
              </tr>
              <tr>
                <td>15 yd</td>
                <td>60</td>
                <td>55</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>210</td>
                <td>195</td>
                <td>15</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    )  
  }
}

export default Dashboard;