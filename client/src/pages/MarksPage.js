import React, { useState } from 'react';
import MarksForm from './Forms/MarksForm';

function MarksPage() {
  // Sample data for subjects and marks
  const subjects = [
    { name: 'DESIGN AND ANALYSIS OF ALGORITHMS', marks: 22 },
    { name: 'ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING', marks: 21 },
    { name: 'CLOUD COMPUTING', marks: 23 },
    { name: 'MULTIMEDIA TECHNOLOGIES', marks: 22 },
    { name: 'CYBER SECURITY AND CYBER LAWS', marks: 21 },
    { name: 'DESIGN AND ANALYSIS OF ALGORITHMS LAB', marks: 38 },
    { name: 'ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING LAB', marks: 38 },
    { name: 'LAB BASED ON CORE ELECTIVE - II', marks: 38 },
    { name: 'LAB BASED ON CORE ELECTIVE- III', marks: 38 },
    { name: 'MINOR PROJECT -III', marks: 38 },
    // Add more subjects here...
  ];

  const [showMarks, setShowMarks] = useState(false);

  const handleViewMarks = () => {
    setShowMarks((prevValue) => !prevValue);
  };

  return (
    <>
    <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body  text-center ">
                <h5 className="card-title">Internal Marks</h5>
                <p className="card-text">View your internal marks for various subjects.</p>
                <button className="btn btn-primary" onClick={handleViewMarks}>View Marks</button>
              </div>
            </div>
            {showMarks && (
            <div className="animated-card card">
              <h2 className='text-center'> View Marks </h2>
            < MarksForm />
            </div>
          )}
          </div>
    
    </>
  );
}

export default MarksPage;
