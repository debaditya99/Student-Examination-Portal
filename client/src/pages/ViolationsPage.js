import React from 'react';
import { useState } from 'react';
import ViolationAPI from './Forms/ViolationAPI';

function ViolationsPage() {

  const [showViolations, setShowViolations] = useState(false);

  const handleViewViolations = () => {
    setShowViolations((prevValue) => !prevValue);
  };

  return (
    <>
    <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body  text-center ">
                <h5 className="card-title">Unfair Means Violations</h5>
                <p className="card-text">View any unfair means violations on your record.</p>
                <button className="btn btn-primary" onClick={handleViewViolations} >View Violations</button>
              </div>
            </div>
            {showViolations && (
            < ViolationAPI />
          )}
          </div>
    
    </>
  );
}

export default ViolationsPage;
