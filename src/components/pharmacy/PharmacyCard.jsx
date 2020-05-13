import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

export default props => (
  <Row className="pharmacy-card">
    <Col>
      <Row>
        <Col lg={3} sm={12} className="text-center section">
          <div className="number text-center">1</div>
          <img
            alt="Prescription slip icon"
            src={
              props.contentfulPage.contentCards[6].cardTiles[0].backgroundImage
                .file.url
            }
            width="115"
          />
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[6].cardTiles[0].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
        </Col>
        <Col lg={3} sm={12} className="text-center section">
          <div className="number text-center">2</div>
          <img
            alt="Shield with check mark icon"
            src={
              props.contentfulPage.contentCards[6].cardTiles[1].backgroundImage
                .file.url
            }
            width="115"
          />
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[6].cardTiles[1].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
        </Col>
        <Col lg={3} sm={12} className="text-center section">
          <div className="number text-center">3</div>
          <img
            alt="Phone icon"
            src={
              props.contentfulPage.contentCards[6].cardTiles[2].backgroundImage
                .file.url
            }
            width="115"
          />
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[6].cardTiles[2].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
        </Col>
        <Col lg={3} sm={12} className="text-center section">
          <div className="number text-center">4</div>
          <img
            alt="Drug packaging icon"
            src={
              props.contentfulPage.contentCards[6].cardTiles[3].backgroundImage
                .file.url
            }
            width="115"
          />
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[6].cardTiles[3].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
        </Col>
      </Row>
    </Col>
  </Row>
)
