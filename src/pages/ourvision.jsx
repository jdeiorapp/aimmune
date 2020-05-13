import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
        contentfulPage(page: { eq: "Our Vision" }) {
          title
          description {
            description
          }
          urlPath
          contentCards {
            childContentfulGenericContentTitleRichTextNode {
              json
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
            }
            buttonText
            buttonLink
          }
        }
      }
    `
  )
  return (
    <Layout currentPage="ourvision">
      <section className="ourvision">
        <Container>
          <Row>
            <Col lg={{ span: 6, order: 1 }} xs={{ span: 12, order: 12 }}>
              <Row>
                <Col lg={10} className="d-none d-lg-block header">
                  {documentToReactComponents(
                    contentfulPage.contentCards[0]
                      .childContentfulGenericContentTitleRichTextNode.json,
                    options
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg={{ span: 10, offset: 2 }}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        contentfulPage.contentCards[0].bodyText
                          .childContentfulRichText.html,
                    }}
                  ></div>
                  <Row>
                    <Col className="btn-wrapper">
                      <a
                        href={contentfulPage.contentCards[0].buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center"
                      >
                        {contentfulPage.contentCards[0].buttonText}
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 6, order: 12 }} xs={{ span: 12, order: 1 }}>
              <Row>
                <Col lg={8} className="d-lg-none header">
                  {documentToReactComponents(
                    contentfulPage.contentCards[0]
                      .childContentfulGenericContentTitleRichTextNode.json,
                    options
                  )}
                </Col>
              </Row>
              <img
                src={contentfulPage.contentCards[0].backgroundImage.fluid.src}
                width="100%"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
