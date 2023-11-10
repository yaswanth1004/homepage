import React from 'react';

const Navbar = () => {
  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      console.log('Searching...'); // Implement your search functionality here
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">SHOWTIME SQUAD</a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="form-inline my-2 my-lg-0 mr-auto">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onKeyPress={(e) => handleSearch(e)}
            />
          </form>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/login">
                <button className="btn btn-primary btn-sm">Login</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                <button className="btn btn-success btn-sm">Sign Up</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
