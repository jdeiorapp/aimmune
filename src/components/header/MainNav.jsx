import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import $ from "jquery"

export default props => {
  const [isNavOpen, setNavOpen] = useState(false)

  function toggleNav() {
    setNavOpen(!isNavOpen)
    if (isNavOpen) {
      $("body").removeClass("scroll-none")
      $(".isi-tray").removeClass("hide")
    } else {
      $("body").addClass("scroll-none")
      $(".isi-tray").addClass("hide")
    }
  }

  return (
    <section className="main-nav">
      <Container>
        <Row>
          <Col md={12} lg={2} className="navbar-header">
            <Link to="/">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={require("../../assets/images/palforzia-logo-mobile.svg")}
                />
                <img
                  alt=""
                  src={require("../../assets/images/palforzia-logo.svg")}
                />
              </picture>
            </Link>
            <button
              type="button"
              className={isNavOpen ? "navbar-toggle active" : "navbar-toggle"}
              onClick={() => toggleNav()}
            />
          </Col>
          <Col md={10} className="navbar-collapse">
            <nav className="right" id="navbar-collapse">
              <ul>
                <li>
                  <Link
                    to="/whatitis"
                    className={props.currentPage === "whatitis" ? "active" : ""}
                  >
                    What it is
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quiz"
                    className={props.currentPage === "quiz" ? "active" : ""}
                  >
                    Is It Right For Us?
                  </Link>
                </li>
                <li>
                  <Link
                    to="/treatment"
                    className={
                      props.currentPage === "treatment" ? "active" : ""
                    }
                  >
                    Treatment Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className={props.currentPage === "support" ? "active" : ""}
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <a onClick={() => navigate("/support#starting-palforzia")}>
                    Starting Palforzia
                  </a>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className={props.currentPage === "faqs" ? "active" : ""}
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link to="/stayinformed" className="stay-inform">
                    Stay Informed
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
      <div className={isNavOpen ? "mobile-nav opened" : "mobile-nav"}>
        <ul className="mobile-nav-links">
          <li onClick={() => toggleNav()}>
            <Link to="/whatitis">What it is</Link>
          </li>
          <li onClick={() => toggleNav()}>
            <Link to="/quiz">Is it right for us?</Link>
          </li>
          <li onClick={() => toggleNav()}>
            <Link to="/treatment">Treatment Overview</Link>
          </li>
          <li onClick={() => toggleNav()}>
            <Link to="/support">Support</Link>
          </li>
          <li onClick={() => toggleNav()}>
            <a onClick={() => navigate("/support#starting-palforzia")}>
              Starting Palforzia
            </a>
          </li>
          <li onClick={() => toggleNav()}>
            <Link to="/faq">Faq</Link>
          </li>
        </ul>
        <ul className="mobile-utility-links">
          <li onClick={() => toggleNav()}>
            <a
              href="https://palforziarems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rems-button text-center"
              id="rems-link"
            >
              PALFORZIA REMS
            </a>
          </li>
          <li onClick={() => toggleNav()}>
            <a
              href={"../../static/pi_palforzia.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              id="header-pi"
            >
              Prescribing Information
            </a>
          </li>
          <li onClick={() => toggleNav()}>
            <a
              id="header-medguide"
              href={"../../static/medguide_palforzia.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Medication Guide
            </a>
          </li>
          <li onClick={() => toggleNav()}>
            <a href="#page-isi">Important Safety Information</a>
          </li>
          <li onClick={() => toggleNav()}>
            <a
              href="https://www.palforziapro.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Healthcare Provider Site
            </a>
          </li>
        </ul>
        <div className="stay-inform-link text-center">
          <Link to="/stayinformed" onClick={() => toggleNav()}>
            Stay Informed
          </Link>
        </div>
        <div className="mobile-nav-overlay">&nbsp;</div>
      </div>
    </section>
  )
}
