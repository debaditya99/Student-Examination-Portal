import { useState } from 'react';
import React from 'react';
import AnswerSheetFormAPI from './Forms/AnswerSheetFormAPI';

function AnswerSheetsPage() {

  const [showAnswerSheets, setShowAnswerSheets] = useState(false);
  const handleCheckAnswerSheets = () => {
    setShowAnswerSheets((prevValue) => !prevValue);
  };

  return (
    <>
    <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body  text-center ">
                <h5 className="card-title">Answer Sheets</h5>
                <p className="card-text">Request to check your answer sheets.</p>
                <button className="btn btn-primary" onClick={handleCheckAnswerSheets}>Check Answer Sheets</button>
              </div>
            </div>
            {showAnswerSheets && (
            <div className="animated-card card">
              <h2 className='text-center'> Download Answer Sheet </h2>
              < AnswerSheetFormAPI />
            </div>
          )}
    </div>
    
    </>
  );
}

export default AnswerSheetsPage;
