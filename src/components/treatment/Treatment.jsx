import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

export default props => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 5, order: 1, offset: 1 }} xs={{ span: 12, order: 12 }}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[0].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
          <Row>
            <Col className="btn-wrapper">
              <a
                href={props.contentfulPage.contentCards[0].buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                {props.contentfulPage.contentCards[0].buttonText}
              </a>
            </Col>
          </Row>
        </Col>
        <Col md={{ span: 6, order: 12 }} xs={{ span: 12, order: 1 }}>
          <img
            src={props.contentfulPage.contentCards[0].backgroundImage.fluid.src}
            width="100%"
            className="level-up-img"
          />
        </Col>
      </Row>
    </Container>
  )
}
