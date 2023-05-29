import React, { useState } from 'react';

function ColorToggleButton() {
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
    <div>
      <div id="targetElement" className={isBlackBg ? 'black-bg' : 'white-bg'}>
        Target Element
      </div>
      <button id="toggleButton" style={buttonStyle} onClick={toggleBackgroundColor}>
        {isBlackBg ? 'Switch to White' : 'Switch to Black'}
      </button>
    </div>
    </>
  );
}

export default ColorToggleButton;
