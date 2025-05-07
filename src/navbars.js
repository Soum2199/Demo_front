import React from 'react';

function Navbars() {
  return (
    <>
      <nav className="navbar" style={{ backgroundColor: 'salmon' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left side: Login and Signin */}
          <div>
            <a href="/login" className="btn btn-outline-success me-2" role="button" style={{ margin: '5px' }}>
              Login
            </a>
            <a className="btn btn-primary" href="/signin" role="button" style={{ margin: '5px' }}>
              Signin
            </a>
          </div>

          {/* Right side: Logout */}
          <div>
            <a className="btn btn-link" href="/" role="button">
              Logout
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbars;
