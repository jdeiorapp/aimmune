import React from "react"
import Layout from "../components/Layout"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Treatment from "../components/treatment/Treatment"
import Steps from "../components/treatment/Steps"
import GettingReady from "../components/treatment/GettingReady"

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
        contentfulPage(page: { eq: "Treatment Overview" }) {
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
              bulletImage {
                fluid {
                  src
                }
              }
              bullets {
                ... on ContentfulBulletContent {
                  childContentfulBulletContentTextTextNode {
                    text
                  }
                }
              }
            }
            backgroundImage {
              fluid {
                src
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
      currentPage="treatment"
      title={contentfulPage.title}
      description={contentfulPage.description.description}
    >
      <section className="treatment">
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
        <Treatment contentfulPage={contentfulPage} />
        <section className="callout">
          <Steps contentfulPage={contentfulPage} options={options} />
        </section>
        <GettingReady contentfulPage={contentfulPage} options={options} />
      </section>
    </Layout>
  )
}
