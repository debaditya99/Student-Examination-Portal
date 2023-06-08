import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { studentREF} from '../constants/studentConstant';

//sd

function AnswerSheetFormAPI() {
  const [semester, setSemester] = useState('');
  const [answersheets, setAnswersheets] = useState('');
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
      if (semester){
        axios
          .get(`http://localhost:3001/data/request/answersheet`, { 
            params: { semester: semester, studentREF: studentREF },
          })
          .then((res) => {
            console.log('GET request successful:', res.data);
            console.log(res.data)
            setAnswersheets(res.data);
          })
            .catch((err) => {
                console.error('Error sending GET request:', err);
                // Handle any errors that occurred during the request
          });
      } else {
        // Clear the state variables if no semester is selected
        setAnswersheets([]);
      }
    }, [semester]);

    const [linkClick, setLinkClick] = useState(false);

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
          {answersheets.length === 0 && (
            <h5 className="mt-4 mb-0">
              No Answer Sheets Available
              </h5>
          )}
          { answersheets.length > 0 && (
        <div className="table-responsive mt-3">
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th className="col-sm-9">Course (Abbr.)</th>
              </tr>
            </thead>
            <tbody>
              {/* {answersheets.map((answersheets, index) => (
                <tr key={index}>
                  <td>
                    <a href={answersheets.url} download>
                    {answersheets.name}
                    </a>
                  </td>
                </tr>
              ))} */}
              {answersheets.map((answersheet, index) => (
                
                <tr key={index}>
                  <td>
                    {answersheet.url ? (
                      <a href={answersheet.url} download>
                        {answersheet.name}
                      </a>
                    ) 
                    : (
                      <span>{answersheet.name}</span>
                    )
                    }
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
    </>
  );
}

export default AnswerSheetFormAPI;
