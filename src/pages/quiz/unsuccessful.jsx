import React from "react"
import Layout from "../../components/Layout"
import { Container, Col, Row } from "react-bootstrap"
import QuizHeader from "./quizHeader"

import Unsuccessful from "../../assets/images/unsuccessful.png"

export default () => {
  return (
    <Layout>
      <QuizHeader />
      <section className="quiz">
        <Container>
          <Row>
            <Col lg={6}>
              <img src={Unsuccessful} width="100%" />
            </Col>
            <Col lg={6} className="text-white copy">
              <h5>
                <strong>PALFORZIA may not be right for your family.</strong>
              </h5>
              Talk to your allergist to find out more about your child’s
              options.
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
