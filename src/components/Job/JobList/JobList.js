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
    // const PORT = process.env.PORTDB;
    console.log(" JOB LIST")
    axios.get(`http://localhost:4000/api/v1/jobs`)
      .then(res=> {
        console.log('data',res.data);
        this.setState({
          jobName:res.data
        })
        
      })
      .catch( err =>
        console.log(err)
      )
    }

    // expand = () => {

    // }

    render() {
      console.log(this.state.jobName);
      console.log(this.state.jobName.length);
      let jobs=null;
      jobs = this.state.jobName.map(job => {
        console.log(job._id)
        return <Job key={job._id} job={job}/>
      })
      console.log(jobs)
      return(
        <>
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


//   render() {
//     return (
//       <>
//         <div>
//           <Table striped border hover responsive="sm" variant="dark" ml="10px">
//             <thead>
//               <tr>
//                 <th>Builder</th>
//                 <th>Address</th>
//                 <th>City</th>
//                 <th>Trailer</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Bob Ihme</td>
//                 <td>5977 Forest Haven</td>
//                 <td>Glen Arbor</td>
//                 <td>10</td>
//               </tr>
//               <tr>
//                 <td>Bob Ihme</td>
//                 <td>5990 S Manitou Trl</td>
//                 <td>Glen Arbor</td>
//                 <td>15</td>
//               </tr>
//               <tr>
//                 <td>Bob Ihme</td>
//                 <td>Beachcomber</td>
//                 <td>Homestead</td>
//                 <td>15</td>
//               </tr>
//               <tr>
//                 <td>Bob Ihme</td>
//                 <td>Gentle Winds new</td>
//                 <td>Homestead</td>
//                 <td>15</td>
//               </tr>
//             </tbody>
//           </Table>
//         </div>
//       </>
//     )
//   }
// }

export default JobList;