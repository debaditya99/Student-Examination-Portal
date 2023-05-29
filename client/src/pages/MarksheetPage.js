import React, {useState} from 'react';
import EnrollmentForm from './Forms/EnrollmentForm';
import subject from '../data/marks.json';

const optionsBySemester = subject;

function MarksheetPage() {

  const [semester, setSemester] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showMarksheet, setShowMarksheet] = useState(false);

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
    setSelectedOption('');
  };

   const handleDownloadMarksheet = () => {
    setShowMarksheet((prevValue) => !prevValue);
  };

  // Get all subjects from all semesters
  const allSubjects = Object.values(optionsBySemester).reduce((acc, semester) => {
    return [...acc, ...semester.map((subject) => subject.course)];
  }, []);

  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/marksheet.pdf'; // Replace with the actual filename of your PDF file
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
    <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body  text-center ">
                <h5 className="card-title">Digital Marksheet</h5>
                <p className="card-text">Request to download your digital marksheet.</p>
                <button className="btn btn-primary" onClick={handleDownloadMarksheet}>Download Marksheet</button>
              </div>
            </div>
            {showMarksheet && (
            <div className="animated-card card">
              <div className="container text-center ">
    <h2 className='mb-4'>Download Digital Marksheet</h2>
      <div className="form-group mt-2 row">
            <label htmlFor="selectSemester" className="col-sm-3 col-form-label">Semester</label>
            <div className="col-sm-9">
            <select
              id="selectSemester"
              className="form-control"
              value={semester}
              onChange={handleSemesterChange}
            >
              {/* <option value="">-- Select --</option>
              <option value="Sem 1">Sem 1</option>
              <option value="Sem 2">Sem 2</option>
              <option value="Sem 3">Sem 3</option> */}
              <option value="">-- Select --</option>
              {Object.keys(optionsBySemester).map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
            </div>
      </div>
  
      {semester && (
      <div className="form-group text-center mt-4">
          <button type="submit" className="btn btn-secondary" onClick={handleDownload}>Click Here</button>
      </div>
      )}

    </div>
            </div>
          )}
          </div>
    
    </>
  );
}

export default MarksheetPage;
