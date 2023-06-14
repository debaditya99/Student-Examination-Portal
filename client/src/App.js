import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './pages/Dashboard';
import NavbarTop from './pages/NavbarTop';
import Welcome from './pages/Welcome';
import LoginPage from './pages/Forms/LoginPage';

function App() {
  //   return (
  //     <>
  //     < NavbarTop />
  //     < Welcome />
  //     < Dashboard />
  //     </>
  //   );
  // }

  const [showLoginPage, setShowLoginPage] = useState(true);

  const handleToggleView = () => {
    setTimeout(() => {
    setShowLoginPage((prevValue) => !prevValue);
    }, 777+777); // Delay of 0.777 seconds (777 milliseconds)
  };

  const handleChildButtonClick = () => {
    // Perform child button functionality here
    console.log('Child button clicked');
    handleToggleView();
  };

  const [isBlackBg, setIsBlackBg] = useState(true);

  const toggleBackgroundColor = () => {
    setIsBlackBg((prevIsBlackBg) => !prevIsBlackBg);
  };

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('dark-mode', !isBlackBg);
  }, [isBlackBg]);

  const textStyle = {
    backgroundColor: isBlackBg ? '#111' : '#eee',
    color: isBlackBg ? 'white' : 'black'
  };

  return (
    <>
       <div className={isBlackBg ? 'white-bg' : 'black-bg dark-mode'}>
      <NavbarTop />
      {showLoginPage ? (
        <>
          <LoginPage style={textStyle} onButtonClick={handleChildButtonClick} />
        </>
      ) : (
        <>
          <Welcome style={textStyle}/>
          <Dashboard />
          <div className="text-center">
            <button id="toggleButton" class="btn btn-primary btn-block m-5" style={textStyle} onClick={toggleBackgroundColor}>
              {isBlackBg ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
        </>
      )}
      
      
      </div>
    </>
  );
}
  
  export default App;