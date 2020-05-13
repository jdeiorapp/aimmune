import React from "react"
import Layout from "../components/Layout"
import { Link, navigate } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

export default () => (
  <Layout>
    <section className="sitemap">
      <Container>
        <Row>
          <Col>
            <h1>Sitemap</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/whatitis">What It Is</Link>
              </li>
              <li>
                <Link to="/quiz"> Is It Right For Us?</Link>
              </li>
              <li>
                <Link to="/treatment">Treatment Overview</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <a onClick={() => navigate("/support#starting-palforzia")}>
                  Starting PALFORZIA
                </a>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/stayinformed">Stay Informed</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)
