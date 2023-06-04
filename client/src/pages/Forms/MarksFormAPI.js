import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { studentREF } from '../constants/studentConstant';

function MarksFormAPI() {
  const [semester, setSemester] = useState('');
  const [courseName, setCourseName] = useState('');
  const [allocMarks, setAllocMarks] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  // const semestersOptions = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'];
  const [semestersOptions, setSemesterOptions] = useState([]);


  // const handleSemesterChange = (event) => {
  //   setSemester(event.target.value);
  // };
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
    // Send GET request on component mount
    if (semester){
    axios
      .get(`http://localhost:3001/data/marks`, { 
        params: { semester: semester, studentREF: studentREF },
      })
      .then((res) => {
        console.log('GET request successful:', res.data);
        // Perform any necessary actions upon successful response
        const data = res.data;

        const courseNames = data.map((result) => result.courseName);
        const allocatedMarks = data.map((result) => result.allocMarks);
        const totalMarks = data.map((result) => result.totalMarks);

        setCourseName(courseNames);
        setAllocMarks(allocatedMarks);
        setTotalMarks(totalMarks);
      })
        .catch((err) => {
            console.error('Error sending GET request:', err);
            // Handle any errors that occurred during the request
      });
  } else {
    // Clear the state variables if no semester is selected
    setCourseName('');
    setAllocMarks('');
    setTotalMarks('');
  }
  }, [semester]);

  return (
    <div className="container text-center ">
      <div className="form-group mt-2 row">
          <label htmlFor="selectSemester" className="col-sm-3 col-form-label">Semester</label>
          <div className="col-sm-9">
          <select
            id = "selectSemester"
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

      { (courseName.length > 0) && (
        <div className="table-responsive mt-3">
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th  className="col-sm-9">Course Name</th>
                <th className="col-sm-2">Allocated Marks</th>
                <th className="col-sm-2">Total Marks</th>
              </tr>
            </thead>
            <tbody>
              {courseName.map((name, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{allocMarks[index]}</td>
                  <td>{totalMarks[index]}</td>
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

export default MarksFormAPI;
