import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Welcome() {
  const [welcomeMessage, setWelcomeMessage] = useState('');

    useEffect(() => {
        // Predefined value
        const value = {
            studentID: "647767b0e27def1886177f24"
        }
    
        // Send POST request on component mount
        axios.post('http://localhost:3001/data/welcome', { value })
          .then((res) => {
            console.log('Post request successful:', res.data);
            // Perform any necessary actions upon successful response
            setWelcomeMessage(res.data);

          })
          .catch((err) => {
            console.error('Error sending post request:', err);
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