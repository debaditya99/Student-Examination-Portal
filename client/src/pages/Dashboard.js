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

  return (
    <>
 
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