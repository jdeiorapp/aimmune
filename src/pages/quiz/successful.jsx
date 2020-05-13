import React from "react"
import Layout from "../../components/Layout"
import { Container, Col, Row } from "react-bootstrap"
import QuizHeader from "./quizHeader"

import Successful from "../../assets/images/successful.png"

export default () => {
  return (
    <Layout>
      <QuizHeader />
      <section className="quiz">
        <Container>
          <Row>
            <Col lg={6}>
              <img src={Successful} width="100%"></img>
            </Col>
            <Col lg={4} className="text-white copy">
              <h5>
                <strong>
                  PALFORZIA might be able to help reduce your child’s risk of a
                  peanut allergy reaction.
                </strong>
              </h5>
              Talk to your allergist about PALFORZIA and whether it is right for
              your family.
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
