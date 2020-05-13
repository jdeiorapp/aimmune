import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/Layout"
import SignUpForm from "../components/form/SignUpForm"

import SignUpImage from "../assets/images/signup_image.png"
import SignUpImageMobile from "../assets/images/signup_image_mobile.png"

export default () => (
  <Layout
    title={"Peanut allergy treatment | PALFORZIA (peanut allergen powder-dnfp)"}
    description={"PALFORZIA is FDA approved and available soon."}
  >
    <section className="signup-wrapper">
      <Container className="signup">
        <Row>
          <Col lg={6} xs={12}>
            <Row>
              <Col lg={8} className="d-lg-none">
                <h1>
                  Now FDA Approved <br />
                  <span>and Available Soon.</span>
                </h1>
              </Col>
            </Row>
            <picture>
              <source media="(max-width: 768px)" srcSet={SignUpImageMobile} />
              <img alt="" src={SignUpImage} width="100%" />
            </picture>
          </Col>
          <Col lg={6} xs={12}>
            <Row>
              <Col lg={8} className="d-none d-lg-block">
                <h1>
                  Now FDA Approved <br />
                  <span>and Available Soon.</span>
                </h1>
              </Col>
            </Row>
            <Row className="thank-you">
              <Col lg={{ span: 10, offset: 2 }}>
                Thank you for signing up to receive more information about
                PALFORZIA, we'll be in touch soon.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)
