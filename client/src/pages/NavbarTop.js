import React from 'react';
import logo from '../bvicam.png';

function NavbarTop() {
    return (
    <>
        {/* <div className="text-center m-0 logo-container">
          <img src={logo} alt="Logo" className="logo ms-auto" />
          <h1 className="text-center heading mt-0 mb-4 me-auto">Student Examination Portal</h1>
        </div> */}
        <div className=" d-flex justify-content-center align-items-center">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="text-center heading ms-3">Student Examination Portal</h1>
        </div>
        {/* <div className="d-flex justify-content-center align-items-center position-relative">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="text-center heading position-absolute start-0 end-0 p-3 m-0">
            Student Examination Portal
          </h1>
        </div> */}



    </>
    );
  }
  
  export default NavbarTop;