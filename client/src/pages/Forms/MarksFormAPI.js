import React, { useState } from 'react';
import axios from 'axios';

function MarksFormAPI() {
  const [semester, setSemester] = useState('');
  const [courseName, setCourseName] = useState('');
  const [allocMarks, setAllocMarks] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const semestersOptions = ['Semester 1', 'Semester 2', 'Semester 3'];

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform filtering and fetch data from Express server
    fetch(`/api/data?semester=${semester}`)
      .then((response) => response.json())
      .then((data) => {
        setCourseName(data.courseName);
        setAllocMarks(data.allocMarks);
        setTotalMarks(data.totalMarks);
        console.log('Data fetched successfully');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="selectSemester">Semester</label>
          <select
            id="selectSemester"
            className="form-control"
            value={semester}
            onChange={handleSemesterChange}
          >
            <option value="">-- Select --</option>
            {semestersOptions.map((semesterOption, index) => (
              <option key={index} value={index + 1}>
                {semesterOption}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {courseName && (
        <div>
          <h3>Course Name: {courseName}</h3>
          <p>Allocated Marks: {allocMarks}</p>
          <p>Total Marks: {totalMarks}</p>
        </div>
      )}
    </div>
  );
}

export default MarksFormAPI;


// function MarksFormAPI() {
//   const [semester, setSemester] = useState('');
//   const [allocMarks, setAllocMarks] = useState('');
//   const [totalMarks, setTotalMarks] = useState('');
//   const [courseName, setCourseName] = useState('');
//   const semestersOptions = ['Semester 1', 'Semester 2', 'Semester 3'];

//   const handleSemesterChange = (event) => {
//     setSemester(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform filtering and fetch data from MongoDB collections
//     axios
//       .get('/api/data', {
//         params: {
//           semester: semester,
//         },
//       })
//       .then((response) => {
//         const { courseName, allocMarks, totalMarks } = response.data;
//         setCourseName(courseName);
//         setAllocMarks(allocMarks);
//         setTotalMarks(totalMarks);
//         console.log('Data fetched successfully');
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   return (
//     <div className="container text-center ">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group mt-2 row">
//           <label htmlFor="selectSemester" className="col-sm-3 col-form-label">Semester</label>
//           <div className="col-sm-9">
//           <select
//             id="selectSemester"
//             className="form-control"
//             value={semester}
//             onChange={handleSemesterChange}
//           >
//             <option value="">-- Select --</option>
//             {semestersOptions.map((semesterOption, index) => (
//               <option key={index} value={index + 1}>
//                 {semesterOption}
//               </option>
//             ))}
//           </select>
//           </div>
//         </div>
//         <button type="submit" className="btn btn-primary mt-2">Submit</button>
//       </form>

//       {courseName && allocMarks && totalMarks && (
//         <div>
//           <h3>Course Name: {courseName}</h3>
//           <p>Allocated Marks: {allocMarks}</p>
//           <p>Total Marks: {totalMarks}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MarksFormAPI;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function MarksFormAPI() {
//   const [semester, setSemester] = useState('');
//   const [semestersOptions, setSemesterOptions] = useState([]);

//   useEffect(() => {
//     // Fetch semester options from the backend API
//     axios.get('/api/semesters')
//       .then((response) => {
//         setSemesterOptions(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching semesters:', error);
//       });
//   }, []);

//   const handleSemesterChange = (event) => {
//     setSemester(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Send the selected semester to the backend API
//     axios.post('/api/selections', { semester })
//       .then((response) => {
//         console.log('Selection saved successfully');
//       })
//       .catch((error) => {
//         console.error('Error saving selection:', error);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="selectSemester">Semester</label>
//           <select
//             id="selectSemester"
//             className="form-control"
//             value={semester}
//             onChange={handleSemesterChange}
//           >
//             <option value="">-- Select --</option>
//             {semestersOptions.map((semesterOption) => (
//               <option key={semesterOption._id} value={semesterOption.name}>
//                 {semesterOption.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default MarksFormAPI;
