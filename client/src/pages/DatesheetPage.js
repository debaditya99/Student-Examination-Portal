import { useState } from "react";
import React from 'react';

function DatesheetPage() {

  // const subjects = [
  //   { name: 'DESIGN AND ANALYSIS OF ALGORITHMS', dates: '22/MAR/2023' },
  //   { name: 'ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING', dates: '23/MAR/2023' },
  //   { name: 'CLOUD COMPUTING', dates: '24/MAR/2023' },
  //   { name: 'MULTIMEDIA TECHNOLOGIES', dates: '25/MAR/2023' },
  //   { name: 'CYBER SECURITY AND CYBER LAWS', dates: '27/MAR/2023' },
  //   { name: 'DESIGN AND ANALYSIS OF ALGORITHMS LAB', dates: '28/MAR/2023' },
  //   { name: 'ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING LAB', dates: '29/MAR/2023' },
  //   { name: 'LAB BASED ON CORE ELECTIVE - II', dates: '30/MAR/2023' },
  //   { name: 'LAB BASED ON CORE ELECTIVE- III', dates: '31/MAR/2023' },
  //   { name: 'MINOR PROJECT -III', dates: '7/APR/2023' },
  //   // Add more subjects here...
  // ];

  // const [showDatesheet, setShowDatesheet] = useState(false);

  // const handleViewDatesheet = () => {
  //   setShowDatesheet((prevValue) => !prevValue);
  // };

  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/certificate.pdf'; // Replace with the actual filename of your PDF file
    window.open(pdfUrl, '_blank');
  };

  return (<>
    <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body  text-center ">
                <h5 className="card-title">Upcoming Exams</h5>
                <p className="card-text">Check the datesheet for upcoming exams.</p>
                <button className="btn btn-primary" onClick={handleDownload}>View Datesheet</button>
              </div>
            </div>
            {/* {showDatesheet && (
            <div className="animated-card card">
              <h2>
                Upcoming Exams
              </h2>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Exams</th>
                    <th>Dates</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject, index) => (
                    <tr key={index}>
                      <td>{subject.name}</td>
                      <td>{subject.dates}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} */}
    </div>
    
    </>
  );
}

export default DatesheetPage;
