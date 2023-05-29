
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import MarksPage from './pages/MarksPage';
import DatesheetPage from './pages/DatesheetPage';
import CertificatePage from './pages/CertificatePage';
import MarksheetPage from './pages/MarksheetPage';
import AnswerSheetsPage from './pages/AnswerSheetsPage';
import ViolationsPage from './pages/ViolationsPage';
import NavbarTop from './pages/NavbarTop';
import Welcome from './pages/Welcome';
import LoginPage from './pages/Forms/LoginPage';

function App() {

  const [showMarks, setShowMarks] = useState(false);

  const handleViewMarks = () => {
    setShowMarks((prevValue) => !prevValue);
  };

    return (
      <>
      < NavbarTop />
      < Welcome />
      < Dashboard />
      </>
    );
  }
  
  export default App;