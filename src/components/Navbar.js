import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

export default function Navbar() {
  const [showDonateModal, setShowDonateModal] = useState(false);

  useEffect(() => {}, []);

  const handleToggleModalDonate = (state) => {
    setShowDonateModal(state);
  };

  return (
    <div className="container-fluid m-0 px-5 p-1 bg-white">
      <div className="navbar navbar-expand-lg bg-white navbar-white m-0 p-0 d-flex justify-content-center">
        <div className="container m-0 p-0">
          <Link className="text-decoration-none navbar-brand d-flex flex-row align-items-center" to="/">
            <StaticImage src="../images/gft_logo.jpg" style={{ height: "40px", aspectRatio: "1" }} alt=""></StaticImage>
            <span className="text-copperplate">Good Fortune Trust</span>
          </Link>
          <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </div>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto gap-1">
              <Link to="/" className="text-center">
                <div className="btn btn-outline-secondary border-0 rounded-0 p-2" type="button">
                  Home
                </div>
              </Link>
              <div className="dropdown text-center">
                <Link to="/news" className="text-center">
                  <span className="btn btn-outline-secondary border-0 rounded-0 p-2" role="button" aria-expanded="false">
                    News
                  </span>
                </Link>
              </div>
              <div className="dropdown text-center">
                <Link to="/projects" className="text-center">
                  <span className="btn btn-outline-secondary border-0 rounded-0 p-2 dropdown-toggle" role="button" aria-expanded="false">
                    Projects
                  </span>
                </Link>

                <ul className="dropdown-menu rounded-0 p-2">
                  <li>
                    <Link to="/projects/tksl" className="dropdown-item text-decoration-none text-dark">
                      Tashi Khangmar Samdrub Ling
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects/khangmar-monastery" className="dropdown-item text-decoration-none text-dark">
                      Khangmar Monastery (Tibet)
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects/jr-nunnery" className="dropdown-item text-decoration-none text-dark">
                      Jhilu Ritrek Nunnery (Tibet)
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects/sera-je-sponsorship" className="dropdown-item text-decoration-none text-dark">
                      Sera Je Monks (India)
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/projects/gft-education" className="dropdown-item text-decoration-none text-dark">
                      Good Fortune Trust Education Program
                    </Link>
                  </li> */}
                </ul>
              </div>
              <Link to="/rinpoche" className="text-center">
                <div className="btn btn-outline-secondary border-0 rounded-0 p-2" type="button">
                  Khensur Rinpoche
                </div>
              </Link>
              <Link to="/donate" className="text-center">
                <div className="btn btn-outline-secondary border-0 rounded-0 p-2" type="button">
                  Donate
                </div>
              </Link>

              <div className="dropdown text-center">
                <span className="btn btn-outline-secondary border-0 rounded-0 p-2 dropdown-toggle" role="button" aria-expanded="false">
                  About
                </span>

                <ul className="dropdown-menu rounded-0 p-2">
                  <li>
                    <Link to="/about/gft" className="dropdown-item text-decoration-none text-dark">
                      Good Fortune Trust
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/buddhism" className="dropdown-item text-decoration-none text-dark">
                      Tibetan Buddhism
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/teachers" className="dropdown-item text-decoration-none text-dark">
                      Teachers
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/photos" className="dropdown-item text-decoration-none text-dark">
                      Photos
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <Modal show={showDonateModal} onHide={handleToggleModalDonate} centered>
        <Modal.Body className="bg-light">
          <div className="text-center text-dark">
            <h5 className="mt-3">❤️ Donate to the Good Fortune Trust 😊</h5>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
