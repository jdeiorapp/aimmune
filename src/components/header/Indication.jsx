import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

export default props => {
  return (
    <>
      <section className="indication-text">
        <Container>
          <Row>
            <Col>This website is intended for a U.S. audience only</Col>
          </Row>
        </Container>
      </section>
      <section className="util-nav">
        <Container>
          <Row>
            <Col>
              <nav>
                <ul>
                  <li>
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
                  <li>
                    <a
                      href={"../../static/pi_palforzia.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="header-pi"
                    >
                      Prescribing Information
                    </a>
                  </li>
                  <li>
                    <a
                      href={"../../static/medguide_palforzia.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Medication Guide
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://palforziapro.com"
                    >
                      Visit Healthcare Provider Site
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile-util-nav">
        <div className="mobile-util-links top">
          <a
            href={"../../static/pi_palforzia.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            id="header-pi"
            className="text-center"
          >
            Prescribing Information
          </a>
          <a
            href={"../../static/medguide_palforzia.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Medication Guide
          </a>
        </div>

        <div className="mobile-util-links">
          <a
            href="https://palforziarems.com"
            target="_blank"
            rel="noopener noreferrer"
            id="rems-link"
            className="text-center"
          >
            PALFORZIA REMS
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://palforziapro.com"
          >
            Healthcare Provider Site
          </a>
        </div>
      </section>
    </>
  )
}
