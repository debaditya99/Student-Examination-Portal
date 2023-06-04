import React, { useEffect, useState } from 'react';
import EnrollmentForm from './Forms/obsolete/EnrollmentForm';
import axios from 'axios';
import { studentREF } from './constants/studentConstant';



function CertificatePage() {
  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/certificate.pdf'; // Replace with the actual filename of your PDF file
    window.open(pdfUrl, '_blank');
  };

  const [isRequested, setIsRequested] = useState(false);
  useEffect(() => {
    // Send POST request on component mount
    axios
    .get(`http://localhost:3001/data/request/check`, {
      params: { studentREF: studentREF },
    })
    .then((res) => {
      console.log('GET request successful:', res.data);
      // Check if the request exists in the response
      const requestExists = Number(res.data.length) > 0;
      // Update the request status
      setIsRequested(requestExists);
    })
    .catch((err) => {
      console.error('Error sending GET request:', err);
      // Handle any errors that occurred during the request
    });
  }, []);

  const handleDownloadCertificate = () => {
    // setShowCertificate((prevValue) => !prevValue);
    // Send API request to backend with student ID
    // Assuming you have the student ID available in a variable called 'studentId'
    // Simulating API request with setTimeout
    if (isRequested) {
      // Request has already been made, do nothing
      return;
    }

    axios
      .get(`http://localhost:3001/data/request`, { 
        params: { studentREF: studentREF,  reqType: 'bonafide-certificate'},
      })
      .then((res) => {
        console.log('GET request successful:', res.data);
        // Perform any necessary actions upon successful response

        // Check if the request exists in the response
      })
        .catch((err) => {
            console.error('Error sending GET request:', err);
            // Handle any errors that occurred during the request
      });

    setTimeout(() => {
      setIsRequested(true);
    }, 1000);
  };

  return (
    <>
    <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body  text-center ">
                <h5 className="card-title">Bonafide Certificate</h5>
                <p className="card-text">Request to download your Bonafide certificate.</p>
                <button className="btn btn-primary" onClick={handleDownloadCertificate} disabled={isRequested}>{isRequested ? 
                'Certificate Requested' : 'Request Certificate'}</button>
              </div>
            </div>
    </div>
    </>
  );
}

export default CertificatePage;
