import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { studentREF } from '../constants/studentConstant';

function MarksFormAPI() {
  const [semester, setSemester] = useState('');
  const [courseName, setCourseName] = useState('');
  const [allocMarks, setAllocMarks] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const semestersOptions = ['Semester 1', 'Semester 2', 'Semester 3'];

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  useEffect(() => {
    // Send GET request on component mount
    if (semester){
    axios
      .get('http://localhost:3001/data/marks', { 
        params: { semester, studentREF },
      })
      .then((res) => {
        console.log('GET request successful:', res.data);
        // Perform any necessary actions upon successful response
        setCourseName(res.data);
        setAllocMarks(res.data);
        setTotalMarks(res.data);
      })
        .catch((err) => {
            console.error('Error sending GET request:', err);
            // Handle any errors that occurred during the request
      });
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

      {courseName && (
        <div>
          <h3>Course Name: {courseName}</h3>
          <p>Allocated Marks: {allocMarks}</p>
          <p>Total Marks: {totalMarks}</p>
        </div>
      )}
    </div>
  );
}

export default MarksFormAPI;
