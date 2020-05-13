import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default props => (
  <Row className="support-card">
    <Col>
      <Row>
        <Col lg={3}>
          <img
            alt="Palforzia risk evaluation and mitigation strategy icon"
            src={props.contentfulPage.contentCards[1].backgroundImage.file.url}
            width="160"
            className="icons"
          />
        </Col>
        <Col lg={9}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[1].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
          <Row>
            <Col>
              <a
                href={props.contentfulPage.contentCards[1].buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rems-link"
              >
                {props.contentfulPage.contentCards[1].buttonText}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="section-border">&nbsp;</Col>
      </Row>
      <Row className="section-1">
        <Col lg={3}>
          <img
            alt="Palforzia pathway program icon"
            src={props.contentfulPage.contentCards[2].backgroundImage.file.url}
            width="160"
            className="icons"
          />
        </Col>
        <Col lg={9}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[2].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
        </Col>
      </Row>
      <Row>
        <Col className="section-border">&nbsp;</Col>
      </Row>
      <Row className="section-2">
        <Col lg={3}>
          <img
            alt="Palforzia pathway patient assistance program icon"
            src={props.contentfulPage.contentCards[3].backgroundImage.file.url}
            width="160"
            className="icons"
          />
        </Col>
        <Col lg={9}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[3].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
          <Row>
            <Col lg={1} xs={2}>
              <img
                alt="Phone icon"
                src={props.contentfulPage.contentCards[3].bulletImage.file.url}
                width="40"
                height="40"
              />
            </Col>
            <Col lg={11} xs={10} style={{ paddingLeft: "10px" }}>
              <p
                style={{
                  paddingTop: "0",
                  display: "inline-block",
                  verticalAlign: "middle",
                  margin: "0",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[3].bullets[0].bodyText
                      .childContentfulRichText.html,
                }}
              ></p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="section-border">&nbsp;</Col>
      </Row>
      <Row className="section-3">
        <Col lg={3}>
          <img
            alt="Palforzia pathway co-pay savings program icon"
            src={props.contentfulPage.contentCards[4].backgroundImage.file.url}
            width="160"
            className="icons"
          />
        </Col>
        <Col lg={9}>
          <div className="header"
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[4].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={props.contentfulPage.contentCards[4].bulletImage.file.url}
                width="12"
              />
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[4].bullets[0]
                      .childContentfulBulletContentTextTextNode.text,
                }}
              ></p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={props.contentfulPage.contentCards[4].bulletImage.file.url}
                width="12"
              />
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[4].bullets[1]
                      .childContentfulBulletContentTextTextNode.text,
                }}
              ></p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={props.contentfulPage.contentCards[4].bulletImage.file.url}
                width="12"
              />
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[4].bullets[2]
                      .childContentfulBulletContentTextTextNode.text,
                }}
              ></p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={props.contentfulPage.contentCards[4].bulletImage.file.url}
                width="12"
              />
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[4].bullets[3].bodyText
                      .childContentfulRichText.html,
                }}
              ></p>
            </div>
          </div>
          <div className="pb-0">
            {documentToReactComponents(
              props.contentfulPage.contentCards[4].bullets[4].bodyText.json,
              props.options
            )}
          </div>

          <Row>
            <Col lg={4} className="enroll-btn-wrapper">
              <a
                href={props.contentfulPage.contentCards[4].buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="enroll-btn text-center"
              >
                {props.contentfulPage.contentCards[4].buttonText}
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="footnote" lg={{ span: 12 }}>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[4].footnote
                      .childContentfulRichText.html,
                }}
              ></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
)
