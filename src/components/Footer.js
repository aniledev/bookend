import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container mt-5 py-5">
        <div className="row">
          <div className="col-6 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="d-block mb-2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
              <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
              <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
              <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
              <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
              <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
            </svg>
            <h4>Bookend</h4>
            <small className="d-block mb-3 text-muted">&copy; 2020-2021</small>
            <div className="copyright">
              <div>Made with love by</div>
              <div>
                <a
                  href="https://github.com/aniledev"
                  target="_blank"
                  rel="noreferrer"
                >
                  @aniledev
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="/features">
                  Book Recommendations
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/features">
                  Personal List
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/features">
                  Coffee Pairing
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/features">
                  Upcoming Features
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="/about">
                  About Developer
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/about">
                  About Project
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Contact Us</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a
                  className="text-muted"
                  href="https://github.com/aniledev"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="text-muted"
                  href="https://twitter.com/aniledev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-muted"
                  href="https://www.linkedin.com/in/elinamcgill/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link className="text-muted" to="/contact">
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
