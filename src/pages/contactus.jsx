import React from "react"
import Layout from "../components/Layout"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default () => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.CODE]: text => (
        <span style={{ whiteSpace: "nowrap" }}>{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>
        node.content[0].value != "" ? <p>{children}</p> : null,
      [INLINES.HYPERLINK]: node => {
        return (
          <a href={node.data.uri} target={"_blank"} rel={"noopener noreferrer"}>
            {node.content[0].value}
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

  const { contentfulPage } = useStaticQuery(
    graphql`
      query {
        contentfulPage(page: { eq: "Contact Us" }) {
          title
          description {
            description
          }
          urlPath
          contentCards {
            childContentfulGenericContentTitleRichTextNode {
              json
            }
            childContentfulGenericContentBodyTextRichTextNode {
              json
            }
            backgroundImage {
              fluid {
                src
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <section className="contactus">
        <Container>
          <Row>
            <Col lg={6}>
              {documentToReactComponents(
                contentfulPage.contentCards[0]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
              <Col lg={8}>
                <img
                  src={contentfulPage.contentCards[0].backgroundImage.fluid.src}
                  width="100%"
                ></img>
              </Col>
            </Col>
            <Col lg={6}>
              {documentToReactComponents(
                contentfulPage.contentCards[0]
                  .childContentfulGenericContentBodyTextRichTextNode.json,
                options
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
