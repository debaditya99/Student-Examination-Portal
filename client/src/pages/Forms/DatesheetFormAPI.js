import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { studentREF} from '../constants/studentConstant';



function DatesheetFormAPI() {
  const [semester, setSemester] = useState('');
  const [datesheets, setDatesheets] = useState([]);
  // const semestersOptions = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'];
  const [semestersOptions, setSemesterOptions] = useState([]);

  const handleSemesterChange = (event) => {
    const selectedSemester = event.target.value;
    setSemester(selectedSemester);
  };

  useEffect(() => {
    // Fetch total semesters from the backend
    axios
      .get('http://localhost:3001/data/request/semesters', { 
        params: { studentREF: studentREF },
      }) // Replace with your backend endpoint
      .then((res) => {
        const totalSemesters = res.data;
        const options = Array.from({ length: totalSemesters }, (_, index) => `Semester ${index + 1}`);
        // console.log(options)
        setSemesterOptions(options);
      })
      .catch((err) => {
        console.error('Error fetching semesters:', err);
      });
  }, []);

  useEffect(() => {
  // const handleSubmit = (event) => {
    if (semester){
      axios
        .get(`http://localhost:3001/data/request/datesheet`, { 
          params: { semester: semester, studentREF: studentREF },
        })
        .then((res) => {
          console.log('GET request successful:', res.data);
          // Perform any necessary actions upon successful response
          
  
          // const datesheet = data.map((result) => result.datesheet);
  
          setDatesheets(res.data);
        })
          .catch((err) => {
              console.error('Error sending GET request:', err);
              // Handle any errors that occurred during the request
        });
    } else {
      // Clear the state variables if no semester is selected
      setDatesheets([]);
    }
  }, [semester]);
  // const handleSemesterChange = (event) => {
  //   setSemester(event.target.value);
  // };
  
  return (
    <div className="container text-center ">
      <div className="form-group mt-2 row">
          <label htmlFor="selectSemester" className="col-sm-3 col-form-label">Semester</label>
          <div className="col-sm-9">
          <select
            id="selectSemester"
            className="form-control"
            value={semester}
            onChange={handleSemesterChange}
          >
            <option value="">-- Select --</option>
            {semestersOptions.map((semesterOption, index) => (
              <option key={index} value={index + 1}>
                {semesterOption}
              </option>
            ))}
          </select>
          </div>
          </div>
          
          {semester && (
            <>
            {/* <button className="btn btn-secondary mt-4" onClick={handleSubmit}>
            Download
          </button> */}
          
          {datesheets.length === 0 && (
            <h5 className="mt-4 mb-0">
              No Datesheets Available
              </h5>
          )}
          { datesheets.length > 0 && (
        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="col-sm-9">Datesheets</th>
              </tr>
            </thead>
            <tbody>
              {datesheets.map((datesheet, index) => (
                <tr key={index}>
                  <td>
                    <a href={datesheet.url} download>
                      {datesheet.filename}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
        </>
        )}
      </div>
  );
}

export default DatesheetFormAPI;