import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Plus from "../../assets/images/Plus.svg"
import plusHovered from "../../assets/images/plusHovered.svg"
import Minus from "../../assets/images/Minus.svg"
import minusHovered from "../../assets/images/minusHovered.svg"

export default props => {
  const [hovered, handleHovered] = useState(false)

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
      [MARKS.CODE]: text => <code>{text}</code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>
        node.content[0].value != "" ? <p>{children}</p> : null,
      [INLINES.HYPERLINK]: node => {
        return (
          <a href={node.data.uri} target={"_blank"} rel={"noopener noreferrer"}>
            {node.data.uri === "https://www.fda.gov/medwatch" ? (
              <strong>{node.content[0].value}</strong>
            ) : (
              <strong>
                <em>{node.content[0].value}</em>
              </strong>
            )}
          </a>
        )
      },
    },
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br />, textSegment]
      }, [])
    },
  }

  const { contentfulGenericContent } = useStaticQuery(
    graphql`
      query {
        contentfulGenericContent(contentName: { eq: "ISI" }) {
          childContentfulGenericContentTitleRichTextNode {
            json
          }
          bodyText {
            childContentfulRichText {
              html
            }
          }
          cardTiles {
            childContentfulGenericContentTitleRichTextNode {
              json
            }
            bodyText {
              json
              childContentfulRichText {
                html
              }
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      <Row>
        <Col md={{ span: 6 }} xs={{ span: 12 }}>
          {props.isiTray ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
              onClick={() => props.toggleIsiTray()}
            >
              {documentToReactComponents(
                contentfulGenericContent
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
              <div className="header-right d-md-none">
                {typeof window !== "undefined" && window.innerWidth > 767 ? (
                  <div>{props.isIsiExpanded ? "SEE LESS" : "SEE MORE"}</div>
                ) : (
                  ""
                )}
                <div>
                  {props.isIsiExpanded ? (
                    <img src={Minus} width="24" height="24" />
                  ) : (
                    <img src={Plus} width="24" height="24" />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              {documentToReactComponents(
                contentfulGenericContent
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
            </div>
          )}
          <div className="boxed-warning">
            {documentToReactComponents(
              contentfulGenericContent.cardTiles[0].bodyText.json,
              options
            )}
          </div>
        </Col>
        <Col
          md={{ span: 6 }}
          xs={{ span: 12 }}
          className="black-box-warning d-none d-md-block"
        >
          {props.isiTray ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
              onClick={() => props.toggleIsiTray()}
            >
              {documentToReactComponents(
                contentfulGenericContent.cardTiles[1]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
              <div
                className="header-right"
                onMouseEnter={() => handleHovered(true)}
                onMouseLeave={() => handleHovered(false)}
              >
                {typeof window !== "undefined" && window.innerWidth > 425 ? (
                  <div>{props.isIsiExpanded ? "SEE LESS" : "SEE MORE"}</div>
                ) : (
                  ""
                )}
                <div>
                  {props.isIsiExpanded ? (
                    <img
                      src={hovered ? minusHovered : Minus}
                      width="24"
                      height="24"
                    />
                  ) : (
                    <img
                      src={hovered ? plusHovered : Plus}
                      width="24"
                      height="24"
                    />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              {documentToReactComponents(
                contentfulGenericContent.cardTiles[1]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
            </div>
          )}
          <div
            dangerouslySetInnerHTML={{
              __html:
                contentfulGenericContent.cardTiles[1].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
        </Col>
      </Row>
      <Row>
        <Col>
          {documentToReactComponents(
            contentfulGenericContent.cardTiles[2].bodyText.json,
            options
          )}
        </Col>
      </Row>
      <Row>
        <Col className="isi-row-3">
          {documentToReactComponents(
            contentfulGenericContent.cardTiles[3]
              .childContentfulGenericContentTitleRichTextNode.json,
            options
          )}
          {documentToReactComponents(
            contentfulGenericContent.cardTiles[3].bodyText.json,
            options
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {documentToReactComponents(
            contentfulGenericContent.cardTiles[4].bodyText.json,
            options
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {documentToReactComponents(
            contentfulGenericContent.cardTiles[5].bodyText.json,
            options
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {documentToReactComponents(
            contentfulGenericContent.cardTiles[6].bodyText.json,
            options
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {documentToReactComponents(
            contentfulGenericContent.cardTiles[7].bodyText.json,
            options
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {documentToReactComponents(
            contentfulGenericContent.cardTiles[8].bodyText.json,
            options
          )}
        </Col>
      </Row>
      {/* Mobile: What is Palforzia? to be at the bottom of ISI */}
      <Row className="d-md-none">
        <Col>
          <div>
            {documentToReactComponents(
              contentfulGenericContent.cardTiles[1]
                .childContentfulGenericContentTitleRichTextNode.json,
              options
            )}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                contentfulGenericContent.cardTiles[1].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  )
}
