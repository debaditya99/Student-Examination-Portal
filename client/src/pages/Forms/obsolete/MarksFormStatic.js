import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import subject from '../../../data/marks.json';
import axios from 'axios';


const optionsBySemester = subject;

function MarksForm() {
  const [semester, setSemester] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
    setSelectedOption('');
  };

  // Get all subjects from all semesters
  const allSubjects = Object.values(optionsBySemester).reduce((acc, semester) => {
    return [...acc, ...semester.map((subject) => subject.course)];
  }, []);

  const handleGetMarks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/data/marks', {
        params: {
          semester: parseInt(semester)
        }
      });
      console.log(response.data);
      // Handle the response data as needed
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  return (
    <>
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
              {/* <option value="">-- Select --</option>
              <option value="Sem 1">Sem 1</option>
              <option value="Sem 2">Sem 2</option>
              <option value="Sem 3">Sem 3</option> */}
              
              <option value="">-- Select --</option>
              {Object.keys(optionsBySemester).map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
            </div>
      </div>

      {semester && (
        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="col-sm-9">Subject</th>
                <th className="col-sm-2">Marks</th>
              </tr>
            </thead>
            <tbody>
              {optionsBySemester[semester].map((subject, index) => (
                <tr key={index}>
                  <td>{subject.course}</td>
                  <td>{subject.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      )}    

      
    </div>
    </>
  );
}

export default MarksForm;
