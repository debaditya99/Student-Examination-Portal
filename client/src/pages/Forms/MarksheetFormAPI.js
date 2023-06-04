import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { studentREF } from '../constants/studentConstant';

function MarksheetFormAPI() {
    const [marksheets, setMarksheets] = useState([]);
  
    useEffect(() => {
      // const handleSubmit = (event) => {
          axios
            .get(`http://localhost:3001/data/request/marksheet`, { 
              params: { studentREF: studentREF },
            })
            .then((res) => {
              console.log('GET request Marksheet successful:', res.data);
              // Perform any necessary actions upon successful response
              // const datesheet = data.map((result) => result.datesheet);
              setMarksheets(res.data);
            })
              .catch((err) => {
                  console.error('Error sending GET marksheet request:', err);
                  // Handle any errors that occurred during the request
            });
      }, []);
  
    return (
      <>
              <div className="animated-card card">
                <h2 className='text-center'> Download Marksheet </h2>
                <div className="container text-center ">
        <div className="form-group mt-2 row">
  
            <div className="col-sm-9">
            </div>
            </div>
              <>
            
            {marksheets.length === 0 && (
              <h5 className="mt-0 mb-0">
                No Marksheet Available
                </h5>
            )}
            { marksheets.length > 0 && (
          <div className="table-responsive mt-0">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="col-sm-9">Marksheets</th>
                </tr>
              </thead>
              <tbody>
                {marksheets.map((marksheets, index) => (
                  <tr key={index}>
                    <td>
                      <a href={marksheets.url} download>
                        {marksheets.filename}
                      </a>
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
  
  export default MarksheetFormAPI;
  