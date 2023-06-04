import React, {useState, useEffect} from 'react';
import MarksheetFormAPI from './Forms/MarksheetFormAPI';

function MarksheetPage() {
  const [showMarksheet, setShowMarksheet] = useState(false);

   const handleDownloadMarksheet = () => {
    setShowMarksheet((prevValue) => !prevValue);
  };

  return (
    <>
    <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body  text-center ">
                <h5 className="card-title">Download Marksheet</h5>
                <p className="card-text">Request to download your Digital Marksheet.</p>
                <button className="btn btn-primary" onClick={handleDownloadMarksheet}>View Marksheets</button>
              </div>
            </div>
            {showMarksheet && (
              < MarksheetFormAPI />
          )}
    </div>
    
    </>
  );
}

export default MarksheetPage;
