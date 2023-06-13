// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform login logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   const [showMarks, setShowMarks] = useState(true);

//   const handleViewMarks = () => {
//     setShowMarks((prevValue) => !prevValue);
//   };

//   return (
//     <>
//     {showMarks && (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-header"><h4>Login</h4></div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="username" className="form-label">Username</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id=""
//                     placeholder=''
//                     value={username}
//                     onChange={handleUsernameChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     placeholder=''
//                     value={password}
//                     onChange={handlePasswordChange}
//                   />
//                 </div>
//                 {/* <div className="text-center">
//                   <button type="submit" onClick={handleViewMarks} className="btn btn-primary">Login</button>
//                 </div> */}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     )}
//     </>
//   );
// }

// export default LoginPage;

import React, { useState, forwardRef } from 'react';

const LoginPage = forwardRef(function LoginPage({onButtonClick}, ref) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const [showLogin, setShowLogin] = useState(true);

  const handleViewPage = () => {
    setTimeout(() => {
    setShowLogin((prevValue) => !prevValue);
  }, 777); // Delay of 2 seconds (2000 milliseconds)
  };

  const isUsernameValid = username.length >= 5; // Minimum 5 characters for username
  const isPasswordValid = password.length >= 8; // Minimum 8 characters for password

  const handleLoginClick = () => {
    // Handle the component button click logic here
    onButtonClick();
    console.log('LOGIN button clicked');
  };

  return (
    <>
    {showLogin && (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-title"><h4>Login</h4></div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className={`form-control ${isUsernameValid ? 'is-valid' : 'is-invalid'}`}
                    id="username"
                    placeholder=""
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  {username && !isUsernameValid && (
                    <div className="invalid-feedback">Username must be at least 5 characters long.</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control ${isPasswordValid ? 'is-valid' : 'is-invalid'}`}
                    id="password"
                    placeholder=""
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {password && !isPasswordValid && (
                    <div className="invalid-feedback">Password must be at least 8 characters long.</div>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    onClick={() => {
                      handleViewPage();
                      handleLoginClick();
                      }}
                    ref={ref}
                    className={`btn btn-primary ${isUsernameValid && isPasswordValid ? '' : 'disabled'}`}
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
})

export default LoginPage;

