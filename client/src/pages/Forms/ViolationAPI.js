import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { studentREF } from '../constants/studentConstant';

function ViolationAPI() {
    const [violations, setViolations] = useState([]);
  
    useEffect(() => {
      // const handleSubmit = (event) => {
          axios
            .get(`http://localhost:3001/data/request/violation`, { 
              params: { studentREF: studentREF },
            })
            .then((res) => {
              console.log('GET request violations successful:', res.data);
              // Perform any necessary actions upon successful response
              // const datesheet = data.map((result) => result.datesheet);
              setViolations(res.data);
            })
              .catch((err) => {
                  console.error('Error sending GET violations request:', err);
                  // Handle any errors that occurred during the request
            });
      }, []);
  
    return (
      <>
              <div className="animated-card card">
                <h2 className='text-center mb-0'> Unfair Means Violations </h2>
                <div className="container text-center ">
        <div className="form-group mt-0 row mb-0">
  
            <div className="col-sm-9">
            </div>
            </div>
              <>
            
            {violations.length === 0 && (
              <h5 className="mt-0 mb-0">
                No Violations Available
                </h5>
            )}
            { violations.length > 0 && (
          <div className="table-responsive mt-3">
            <table className="table table-bordered mb-0">
              <thead>
                <tr>
                  <th className="col-sm-9">Violations</th>
                </tr>
              </thead>
              <tbody>
                {violations.map((violations, index) => (
                  <tr key={index}>
                    <td>
                        {violations.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
          </>
  
        </div>
              </div>
      
      </>
    );
  }
  
  export default ViolationAPI;
  