import React, { useState } from 'react';

function EnrollmentForm() {
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [shift, setShift] = useState('');
  const [submittedFrom, setSubmittedFrom] = useState('');

  const handleEnrollmentNumberChange = (e) => {
    setEnrollmentNumber(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
    setYear('');
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleShiftChange = (e) => {
    setShift(e.target.value);
  };

  const handleSubmittedFrom = (e) => {
    setSubmittedFrom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the form values using the state variables
  };

  return (
    <div className='mt-2 container'>
      <form className="enrollment-form" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="enrollmentNumber" className="col-sm-3 col-form-label">Enroll No</label>
          <div className="col-sm-9">
            <input
              type="text"
              id="enrollmentNumber"
              className="form-control"
              placeholder="Enter Enrollment No"
              value={enrollmentNumber}
              onChange={handleEnrollmentNumberChange}
            />
          </div>
        </div>

        <div className="form-group mt-2 row">
          <label htmlFor="course" className="col-sm-3 col-form-label">Course</label>
          <div className="col-sm-9">
            <select id="course" className="form-control" value={course} onChange={handleCourseChange}>
              <option value="">-- Select Course --</option>
              <option value="MCA">MCA</option>
              <option value="BAJMC">BAJMC</option>
            </select>
          </div>
        </div>

        <div className="form-group mt-2 row">
          <label htmlFor="year" className="col-sm-3 col-form-label">Year</label>
          <div className="col-sm-9">
            <select id="year" className="form-control" value={year} onChange={handleYearChange}>
              <option value="">-- Select Year --</option>
              {course === 'MCA' && (
                <>
                  <option value="Year 1">Year 1</option>
                  <option value="Year 2">Year 2</option>
                </>
              )}
              {course === 'BAJMC' && (
                <>
                  <option value="Year 1">Year 1</option>
                  <option value="Year 2">Year 2</option>
                  <option value="Year 3">Year 3</option>
                </>
              )}
            </select>
          </div>
        </div>

        <div className="form-group mt-2 row">
          <label htmlFor="shift" className="col-sm-3 col-form-label">Shift</label>
          <div className="col-sm-9">
            <select id="shift" className="form-control" value={shift} onChange={handleShiftChange}>
              <option value="">-- Select Shift --</option>
              <option value="Shift 1">Shift 1</option>
              <option value="Shift 2">Shift 2</option>
            </select>
          </div>
        </div>
        
        <div className="form-group text-center mt-3">
          <button type="submit" className="btn btn-secondary">Click Here</button>
        </div>
      </form>
    </div>
  );
}

export default EnrollmentForm;
