import React from "react"
import Layout from "../components/Layout"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import WhatItIs from "../components/whatitis/WhatItIs"
import DosingChart from "../components/whatitis/DosingChart"
import Benefits from "../components/whatitis/Benefits"

export default () => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
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

  const { contentfulPage } = useStaticQuery(
    graphql`
      query {
        contentfulPage(page: { eq: "What it is" }) {
          title
          description {
            description
          }
          urlPath
          contentCards {
            contentName
            title {
              childContentfulRichText {
                html
              }
            }
            bodyText {
              childContentfulRichText {
                html
              }
            }
            buttonText
            buttonLink
            childContentfulGenericContentTitleRichTextNode {
              json
            }
            childContentfulGenericContentBodyTextRichTextNode {
              json
            }
            cardTiles {
              title {
                childContentfulRichText {
                  html
                }
                content {
                  content {
                    value
                  }
                }
              }
              bodyText {
                childContentfulRichText {
                  html
                }
              }
              backgroundImage {
                fluid {
                  src
                }
                file {
                  url
                }
              }
              buttonText
              buttonLink
              childContentfulGenericContentTitleRichTextNode {
                json
              }
              childContentfulGenericContentBodyTextRichTextNode {
                json
              }
            }
            backgroundImage {
              fluid {
                src
              }
              file {
                url
              }
              description
            }
          }
        }
      }
    `
  )

  return (
    <Layout
      currentPage="whatitis"
      title={contentfulPage.title}
      description={contentfulPage.description.description}
    >
      <section className="whatitis">
        <Container className="page-header">
          <Row>
            <Col lg={8} sm={12}>
              {documentToReactComponents(
                contentfulPage.contentCards[0]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
            </Col>
          </Row>
        </Container>
        <WhatItIs contentfulPage={contentfulPage} />
        <section className="callout">
          <DosingChart contentfulPage={contentfulPage} options={options} />
        </section>
        <Benefits contentfulPage={contentfulPage} options={options} />
      </section>
    </Layout>
  )
}
