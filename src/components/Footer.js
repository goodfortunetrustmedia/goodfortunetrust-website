import React from "react";

function Footer() {
  return (
    <div className="container bg-white py-5">
      <div className="d-flex flex-row justify-content-between border-top mx-4 py-2"></div>
      <div className="row px-3">
        <div className="d-flex flex-row justify-content-between">
          <div className="small">© {new Date().getFullYear()} Good Fortune Trust. All Rights Reserved.</div>
          <div className="d-flex flex-column small align-items-end">
            <span className="small">
              <b>Mobile:</b> 0450 850 884
            </span>
            <span className="small">
              <b>Email:</b> hello@goodfortunetrust.org
            </span>
            <span className="d-flex flex-column small align-items-end">
              <span>Post</span>
              <span>P.O. Box 1227</span>
              <span>Spring Hill, QLD 4004</span>
              <span>AUSTRALIA</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
