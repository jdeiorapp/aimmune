import React from "react"
import Layout from "../components/Layout"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import FAQs from "../components/faqs/Faqs"

export default () => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.CODE]: text => <code>{text}</code>,
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
        contentfulPage(page: { eq: "FAQ" }) {
          title
          description {
            description
          }
          urlPath
          contentCards {
            childContentfulGenericContentTitleRichTextNode {
              json
            }
          }
          section {
            sectionName
            childContentfulFaqSectionsSectionTitleRichTextNode {
              json
            }
            questions {
              childContentfulGenericContentTitleRichTextNode {
                json
              }
              bodyText {
                json
                childContentfulRichText {
                  html
                }
              }
              bulletImage {
                fluid {
                  src
                }
              }
              bullets {
                ... on ContentfulGenericContent {
                  bodyText {
                    childContentfulRichText {
                      html
                    }
                  }
                }
                ... on ContentfulBulletContent {
                  text {
                    text
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout currentPage="faqs">
      <section className="page-header">
        <Container className="text-center">
          <Row>
            <Col>
              {documentToReactComponents(
                contentfulPage.contentCards[0]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <FAQs contentfulPage={contentfulPage} options={options} />
    </Layout>
  )
}
