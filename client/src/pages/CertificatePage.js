import React, { useState } from 'react';
import EnrollmentForm from './Forms/EnrollmentForm';

function CertificatePage() {
  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/certificate.pdf'; // Replace with the actual filename of your PDF file
    window.open(pdfUrl, '_blank');
  };

  const [isRequested, setIsRequested] = useState(false);
  const handleDownloadCertificate = () => {
    // setShowCertificate((prevValue) => !prevValue);

    // Send API request to backend with student ID
    // Assuming you have the student ID available in a variable called 'studentId'
    // Simulating API request with setTimeout
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
            {/* {showCertificate && (
            <div className="animated-card card">
              <div className="form-group text-center mt-0">
                <h2>Request Bonafide Certificate</h2>
              <div className="form-group text-center mt-4">
                  <button type="submit" className="btn btn-secondary" onClick={handleDownload}>Request Here</button>
                </div>
              </div> 
            </div>
          )}*/}
    </div>
    </>
  );
}

export default CertificatePage;
