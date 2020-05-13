import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default props => {
  return (
    <Container className="benefits-wrapper">
      <Row>
        <Col className="text-left" lg={4} xs={8}>
          {documentToReactComponents(
            props.contentfulPage.contentCards[3]
              .childContentfulGenericContentTitleRichTextNode.json,
            props.options
          )}
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 9, offset: 1 }} className="benefits">
          <Row>
            <Col lg={2}>
              <img
                src={
                  props.contentfulPage.contentCards[3].cardTiles[0]
                    .backgroundImage.file.url
                }
              />
            </Col>
            <Col>
              {documentToReactComponents(
                props.contentfulPage.contentCards[3].cardTiles[0]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[3].cardTiles[0].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <img
                src={
                  props.contentfulPage.contentCards[3].cardTiles[1]
                    .backgroundImage.file.url
                }
              />
            </Col>
            <Col>
              {documentToReactComponents(
                props.contentfulPage.contentCards[3].cardTiles[1]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[3].cardTiles[1].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <img
                src={
                  props.contentfulPage.contentCards[3].cardTiles[2]
                    .backgroundImage.file.url
                }
              />
            </Col>
            <Col>
              {documentToReactComponents(
                props.contentfulPage.contentCards[3].cardTiles[2]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[3].cardTiles[2].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <img
                src={
                  props.contentfulPage.contentCards[3].cardTiles[3]
                    .backgroundImage.file.url
                }
              />
            </Col>
            <Col>
              {documentToReactComponents(
                props.contentfulPage.contentCards[3].cardTiles[3]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[3].cardTiles[3].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <img
                src={
                  props.contentfulPage.contentCards[3].cardTiles[4]
                    .backgroundImage.file.url
                }
              />
            </Col>
            <Col>
              {documentToReactComponents(
                props.contentfulPage.contentCards[3].cardTiles[4]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[3].cardTiles[4].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" xs={{ span: 8, offset: 2 }}>
          {documentToReactComponents(
            props.contentfulPage.contentCards[3].cardTiles[5]
              .childContentfulGenericContentTitleRichTextNode.json,
            props.options
          )}
        </Col>
      </Row>
      <Row>
        <Col className="btn-wrapper">
          <Link
            to={props.contentfulPage.contentCards[3].cardTiles[5].buttonLink}
            className="text-center"
          >
            {props.contentfulPage.contentCards[3].cardTiles[5].buttonText}
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
