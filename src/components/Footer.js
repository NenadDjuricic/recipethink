import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer  role="contentinfo">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <h4>LOGO</h4>
            </div>
            <div className="col-3">
              <ul className="social-network social-circle">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter  m-md-3" ></i>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">
                &copy; Copyright - Nenad Djuricic All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
