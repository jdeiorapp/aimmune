import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

export default props => (
  <Row className="caregiver-card">
    <Col>
      <Row>
        <Col lg={3}>
          <img
            alt="PALFORZIA treatment handbook icon"
            src={props.contentfulPage.contentCards[7].backgroundImage.file.url}
            width="160"
            className="icons"
          />
        </Col>
        <Col lg={9}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[7].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
          <Row>
            <Col>
              <a
                id="handbook-download"
                href={props.contentfulPage.contentCards[7].buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-guide-link"
              >
                {props.contentfulPage.contentCards[7].buttonText}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="section-border">&nbsp;</Col>
      </Row>
      <Row className="section-2">
        <Col lg={3}>
          <img
            alt="Secondary caregivers education guide icon"
            src={props.contentfulPage.contentCards[8].backgroundImage.file.url}
            width="160"
            className="icons"
          />
        </Col>
        <Col lg={9}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[8].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
          <Row>
            <Col>
              <a
                id="scg-download"
                href={props.contentfulPage.contentCards[8].buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-guide-link"
              >
                {props.contentfulPage.contentCards[8].buttonText}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
)
