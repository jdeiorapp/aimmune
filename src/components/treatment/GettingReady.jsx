import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link, navigate } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default props => {
  return (
    <Container className="getting-ready-wrapper">
      <Row>
        <Col lg={6} xs={8} className="headline">
          {documentToReactComponents(
            props.contentfulPage.contentCards[2]
              .childContentfulGenericContentTitleRichTextNode.json,
            props.options
          )}
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 8, offset: 1 }}>
          {documentToReactComponents(
            props.contentfulPage.contentCards[2]
              .childContentfulGenericContentBodyTextRichTextNode.json,
            props.options
          )}
          <h5 className="pt-35">
            <strong
              dangerouslySetInnerHTML={{
                __html:
                  props.contentfulPage.contentCards[2].cardTiles[0].title
                    .content[0].content[0].value,
              }}
            ></strong>
          </h5>
          {documentToReactComponents(
            props.contentfulPage.contentCards[2].cardTiles[0]
              .childContentfulGenericContentBodyTextRichTextNode.json,
            props.options
          )}
          <Row>
            <Col className="btn-wrapper text-center">
              <Link
                to={
                  props.contentfulPage.contentCards[2].cardTiles[0].buttonLink
                }
                className="text-center take-quiz"
              >
                {props.contentfulPage.contentCards[2].cardTiles[0].buttonText}
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <img
            src={props.contentfulPage.contentCards[2].backgroundImage.fluid.src}
            width="100%"
            className="getting-rdy-img"
          />
        </Col>
        <Col lg={6}>
          <h5>
            <strong
              dangerouslySetInnerHTML={{
                __html:
                  props.contentfulPage.contentCards[2].cardTiles[1].title
                    .content[0].content[0].value,
              }}
            ></strong>
          </h5>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[1].bullets[0]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[1].bullets[1]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[1].bullets[2]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[1].bullets[3]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[1].bullets[4]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[1].bullets[5]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[1].bullets[6]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <h5>
            <strong
              dangerouslySetInnerHTML={{
                __html:
                  props.contentfulPage.contentCards[2].cardTiles[2].title
                    .content[0].content[0].value,
              }}
            ></strong>
          </h5>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[0]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[1]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[2]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[3]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[4]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[5]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[6]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[7]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[8]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[9]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[10]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="bullet">
              <img
                src={
                  props.contentfulPage.contentCards[2].cardTiles[1].bulletImage
                    .fluid.src
                }
                width="12"
              />
            </div>
            <div>
              <p>
                {
                  props.contentfulPage.contentCards[2].cardTiles[2].bullets[11]
                    .childContentfulBulletContentTextTextNode.text
                }
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" xs={{ span: 8, offset: 2 }}>
          {documentToReactComponents(
            props.contentfulPage.contentCards[2].cardTiles[3]
              .childContentfulGenericContentTitleRichTextNode.json,
            props.options
          )}
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, offset: 4 }} className="text-center">
          {documentToReactComponents(
            props.contentfulPage.contentCards[2].cardTiles[3]
              .childContentfulGenericContentBodyTextRichTextNode.json,
            props.options
          )}
        </Col>
      </Row>
      <Row>
        <Col
          className="btn-wrapper"
          md={{ span: 5, offset: 1 }}
          xl={{ span: 3, offset: 3 }}
        >
          <Link
            to={props.contentfulPage.contentCards[2].cardTiles[3].buttonLink}
            className="text-center"
          >
            {props.contentfulPage.contentCards[2].cardTiles[3].buttonText}
          </Link>
        </Col>
        <Col className="btn-wrapper text-center" md={5} xl={3}>
          <a
            onClick={() =>
              navigate(props.contentfulPage.contentCards[2].buttonLink)
            }
          >
            {props.contentfulPage.contentCards[2].buttonText}
          </a>
        </Col>
      </Row>
    </Container>
  )
}
