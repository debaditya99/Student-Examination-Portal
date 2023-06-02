import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { studentREF } from './constants/studentConstant';

function Welcome() {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    // Send POST request on component mount
    axios
      .get(`http://localhost:3001/data/welcome`, { 
        params: { studentREF },
      })
      .then((res) => {
        console.log('GET request successful:', res.data);
        // Perform any necessary actions upon successful response
        setWelcomeMessage(res.data);
      })
        .catch((err) => {
            console.error('Error sending GET request:', err);
            // Handle any errors that occurred during the request
      });
  }, []);
    return (
    <>
        <h2 className='text-center mb-3'> Welcome, { welcomeMessage } </h2>
    </>
    );
  }
  
  export default Welcome;