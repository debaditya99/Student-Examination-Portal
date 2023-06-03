import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { studentREF} from '../constants/studentConstant';

const optionsBySemester = subject;

function AnswerSheetFormAPI() {
  const [semester, setSemester] = useState('');
  const [answersheets, setAnswersheets] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
    setSelectedOption('');
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDownload = () => {
    // Perform download logic here based on the selected semester and option
    console.log(`Downloading: ${semester} - ${selectedOption}`);
  };

  // Get all subjects from all semesters
  const allSubjects = Object.values(optionsBySemester).reduce((acc, semester) => {
    return [...acc, ...semester.map((subject) => subject.course)];
  }, []);


  return (
    <>
    <div className="container">
          <div className="form-group mt-0 row">
            <label htmlFor="selectSemester" className="col-sm-3 col-form-label">Semester:</label>
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
          <div className="form-group mt-3 row">
              <label htmlFor="selectOption"  className="col-sm-3 col-form-label">Subject:</label>
              <div className="col-sm-9">
              <select
                id="selectOption"
                className="form-control"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">-- Select --</option>
                  {optionsBySemester[semester].map((subject, index) => (
                  <option key={index} value={subject.index}>
                    {subject.course}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      {selectedOption && (
      <div className="row">
        <div className="col text-center mt-4">
          <button className="btn btn-secondary" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>
      )}
    </div>
    </>
  );
}

export default AnswerSheetFormAPI;
