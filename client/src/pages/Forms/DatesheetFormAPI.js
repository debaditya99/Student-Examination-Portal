import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { studentREF } from '../constants/studentConstant';


function DatesheetFormAPI() {
  const [semester, setSemester] = useState('');
  const [datesheet, setDatesheet] = useState('');
  const semestersOptions = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'];

  // const handleSemesterChange = (event) => {
  //   setSemester(event.target.value);
  // };
  const handleSemesterChange = (event) => {
    const selectedSemester = event.target.value;
    setSemester(selectedSemester);
  };

  useEffect(() => {
    // Send GET request on component mount
    if (semester){
    axios
      .get('http://localhost:3001/data/request/datesheet', { 
        params: { semester: semester, studentREF: studentREF },
      })
      .then((res) => {
        console.log('GET request successful:', res.data);
        // Perform any necessary actions upon successful response
        const data = res.data;

        const datesheet = data.map((result) => result.datesheet);

        setDatesheet(datesheet);
      })
        .catch((err) => {
            console.error('Error sending GET request:', err);
            // Handle any errors that occurred during the request
      });
  } else {
    // Clear the state variables if no semester is selected
    setDatesheet('');
  }
  }, [semester]);

  
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

      { (datesheet.length > 0) && (
        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th  className="col-sm-9">Datesheets</th>
              </tr>
            </thead>
            <tbody>
              {datesheet.map((name, index) => (
                <tr key={index}>
                  <td>{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )
      }
      {/* {courseName && (
        <div>
          <h3>Course Name: {courseName}</h3>
          <p>Allocated Marks: {allocMarks}</p>
          <p>Total Marks: {totalMarks}</p>
        </div>
      )} */}
    </div>
  );
}

export default DatesheetFormAPI;
