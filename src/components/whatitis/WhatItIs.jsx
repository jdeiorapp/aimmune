import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

export default props => {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 5, offset: 1 }} sm={12}>
          <h5>
            <strong
              dangerouslySetInnerHTML={{
                __html:
                  props.contentfulPage.contentCards[1].title
                    .childContentfulRichText.html,
              }}
            ></strong>
          </h5>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[1].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
          <div className="pt-40 d-none d-lg-block">
            <h5>
              <strong
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[2].title
                      .childContentfulRichText.html,
                }}
              ></strong>
            </h5>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  props.contentfulPage.contentCards[2].bodyText
                    .childContentfulRichText.html,
              }}
            ></div>
            <Row>
              <Col className="btn-wrapper d-none d-lg-block">
                <a
                  href={props.contentfulPage.contentCards[2].buttonLink}
                  className="text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.contentfulPage.contentCards[2].buttonText}
                </a>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={6}>
          <img
            src={props.contentfulPage.contentCards[1].backgroundImage.fluid.src}
            width="100%"
          />
          <div className="chart d-none d-lg-block">
            <img
              src={
                props.contentfulPage.contentCards[2].backgroundImage.file.url
              }
              width="100%"
            />
            <p>
              <em
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[2].backgroundImage
                      .description,
                }}
              ></em>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="clinical-trial d-lg-none">
        <Col lg={{ span: 5, offset: 1 }} sm={12}>
          <h5>
            <strong
              dangerouslySetInnerHTML={{
                __html:
                  props.contentfulPage.contentCards[2].title
                    .childContentfulRichText.html,
              }}
            ></strong>
          </h5>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[2].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
          <Row>
            <Col className="btn-wrapper d-none d-lg-block">
              <a
                href={props.contentfulPage.contentCards[2].buttonLink}
                className="text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.contentfulPage.contentCards[2].buttonText}
              </a>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <img
            src={props.contentfulPage.contentCards[2].backgroundImage.file.url}
            width="100%"
          />
          <p>
            <em
              dangerouslySetInnerHTML={{
                __html:
                  props.contentfulPage.contentCards[2].backgroundImage
                    .description,
              }}
            ></em>
          </p>
          <Row>
            <Col className="btn-wrapper d-lg-none">
              <a
                href={props.contentfulPage.contentCards[2].buttonLink}
                className="text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.contentfulPage.contentCards[2].buttonText}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
