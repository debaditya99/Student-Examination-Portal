import logo from '../bvicam.png';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarksPage from './MarksPage';
import DatesheetPage from './DatesheetPage';
import CertificatePage from './CertificatePage';
import MarksheetPage from './MarksheetPage';
import AnswerSheetsPage from './AnswerSheetsPage';
import ViolationsPage from './ViolationsPage';
import ColorToggleButton from './ColorToggleButton';

function Dashboard() {

  const [isBlackBg, setIsBlackBg] = useState(true);

  const toggleBackgroundColor = () => {
    setIsBlackBg((prevIsBlackBg) => !prevIsBlackBg);
  };

  const buttonStyle = {
    backgroundColor: isBlackBg ? 'black' : 'white',
    color: isBlackBg ? 'white' : 'black'
  };

  return (
    <>
    <div id="targetElement" className={isBlackBg ? 'white-bg' : 'black-bg'}>
      <div className="container">
        <div className="row">
          < MarksPage />
          < DatesheetPage />
        </div>
        <div className="row">
          <AnswerSheetsPage />
          <MarksheetPage />
        </div>
        <div className="row">
          <ViolationsPage />
          <CertificatePage />
        </div>
      </div>

      <button id="toggleButton" style={buttonStyle} onClick={toggleBackgroundColor}>
        {isBlackBg ? 'Switch to Black' : 'Switch to White'}
      </button>
      
      </div>

      {/* {showMarks && (
              <div className="animated-card card">
                < MarksPage />
              </div>
            )}
            {showDatesheet && (
              <div className="animated-card card">
                < DatesheetPage />
              </div>
            )}
            {showCertificate && (
              <div className="animated-card card">
                < CertificatePage />
              </div>
            )}
            {showMarksheet && (
              <div className="animated-card card">
                < MarksheetPage />
              </div>
            )}
            {showAnswerSheets && (
              <div className="animated-card card">
                  < AnswerSheetsPage />
              </div>
            )}
            {showViolations && (
              <div className="animated-card card">
                < ViolationsPage />
              </div>
            )} */}
    </>
  );
}
  
export default Dashboard;