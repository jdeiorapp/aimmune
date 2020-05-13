import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default () => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
      [MARKS.CODE]: text => <code>{text}</code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>
        node.content[0].value != "" ? <p>{children}</p> : null,
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
        contentfulGenericContent(contentName: { eq: "Quiz Header" }) {
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
    `
  )
  return (
    <section className="page-header">
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} className="text-center">
            {documentToReactComponents(
              contentfulGenericContent
                .childContentfulGenericContentTitleRichTextNode.json,
              options
            )}
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            {documentToReactComponents(
              contentfulGenericContent.bodyText.json,
              options
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
