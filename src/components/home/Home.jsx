import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link, useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default props => {
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
  // const { section, contentCards } = getContent()
  const { contentfulPage } = useStaticQuery(
    graphql`
      query {
        contentfulPage(page: { eq: "Home" }) {
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
            backgroundImage {
              title
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
              }
              buttonText
              buttonLink
              childContentfulGenericContentBodyTextRichTextNode {
                json
              }
            }
          }
        }
      }
    `
  )

  return (
    <>
      <section className="homepage">
        <Container>
          <Row>
            <Col lg={6} xs={12}>
              {documentToReactComponents(
                contentfulPage.contentCards[0]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="btn-wrapper">
              <Link
                to={contentfulPage.contentCards[0].buttonLink}
                className="text-center"
              >
                {contentfulPage.contentCards[0].buttonText}
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="callout">
        <Container>
          <Row>
            <Col lg={{ span: 10, offset: 1 }} className="text-center">
              {documentToReactComponents(
                contentfulPage.contentCards[1]
                  .childContentfulGenericContentBodyTextRichTextNode.json,
                options
              )}
            </Col>
          </Row>
          <Row>
            <Col className="btn-wrapper text-center">
              <Link
                to={contentfulPage.contentCards[1].buttonLink}
                className="text-center"
              >
                {contentfulPage.contentCards[1].buttonText}
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="how-treatment-works">
        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 3 }} className="text-center">
              {documentToReactComponents(
                contentfulPage.contentCards[2]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
              <div
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html:
                    contentfulPage.contentCards[2].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Col>
          </Row>
          <Row className="steps">
            <Col>
              <Row>
                <Col lg={4} sm={12} className="text-center section">
                  <div className="number text-center">
                    {
                      contentfulPage.contentCards[2].cardTiles[0].title
                        .content[0].content[0].value
                    }
                  </div>
                  <img
                    src={
                      contentfulPage.contentCards[2].cardTiles[0]
                        .backgroundImage.fluid.src
                    }
                    width="180"
                  ></img>
                  {documentToReactComponents(
                    contentfulPage.contentCards[2].cardTiles[0]
                      .childContentfulGenericContentBodyTextRichTextNode.json,
                    options
                  )}
                </Col>
                <Col lg={4} sm={12} className="text-center section">
                  <div className="number text-center">
                    {
                      contentfulPage.contentCards[2].cardTiles[1].title
                        .content[0].content[0].value
                    }
                  </div>
                  <img
                    src={
                      contentfulPage.contentCards[2].cardTiles[1]
                        .backgroundImage.fluid.src
                    }
                    width="180"
                  ></img>
                  {documentToReactComponents(
                    contentfulPage.contentCards[2].cardTiles[1]
                      .childContentfulGenericContentBodyTextRichTextNode.json,
                    options
                  )}
                </Col>
                <Col lg={4} sm={12} className="text-center section">
                  <div className="number text-center">
                    {
                      contentfulPage.contentCards[2].cardTiles[2].title
                        .content[0].content[0].value
                    }
                  </div>
                  <img
                    src={
                      contentfulPage.contentCards[2].cardTiles[2]
                        .backgroundImage.fluid.src
                    }
                    width="180"
                  ></img>
                  {documentToReactComponents(
                    contentfulPage.contentCards[2].cardTiles[2]
                      .childContentfulGenericContentBodyTextRichTextNode.json,
                    options
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="btn-wrapper text-center">
              <Link
                to={contentfulPage.contentCards[2].buttonLink}
                className="text-center"
              >
                {contentfulPage.contentCards[2].buttonText}
              </Link>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <img
                src={contentfulPage.contentCards[3].backgroundImage.fluid.src}
                width="100%"
              />
            </Col>
            <Col>
              {documentToReactComponents(
                contentfulPage.contentCards[3]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    contentfulPage.contentCards[3].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
              <Row>
                <Col className="btn-wrapper text-center">
                  <Link
                    to={contentfulPage.contentCards[3].buttonLink}
                    className="text-center take-quiz"
                  >
                    {contentfulPage.contentCards[3].buttonText}
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" lg={{ span: 4, offset: 1 }}>
              <img
                src={contentfulPage.contentCards[4].backgroundImage.file.url}
              />
              {documentToReactComponents(
                contentfulPage.contentCards[4]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    contentfulPage.contentCards[4].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
              <Row>
                <Col className="btn-wrapper text-center">
                  <Link
                    to={contentfulPage.contentCards[4].buttonLink}
                    className="text-center"
                  >
                    {contentfulPage.contentCards[4].buttonText}
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col
              className="text-center got-questions"
              lg={{ span: 5, offset: 2 }}
            >
              <img
                src={contentfulPage.contentCards[5].backgroundImage.file.url}
              />
              {documentToReactComponents(
                contentfulPage.contentCards[5]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    contentfulPage.contentCards[5].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
              <Row>
                <Col className="btn-wrapper text-center">
                  <Link
                    to={contentfulPage.contentCards[5].buttonLink}
                    className="text-center"
                  >
                    {contentfulPage.contentCards[5].buttonText}
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

// Get content on Homepage
// export const getContent = () => {
//   const { contentfulPage } = useStaticQuery(
//     graphql`
//       query {
//         contentfulPage(page: { eq: "Home" }) {
//           title
//           description {
//             description
//           }
//           urlPath
//           section {
//             sectionName
//             sectionTitle {
//               childContentfulRichText {
//                 html
//               }
//             }
//             questionTitle {
//               childContentfulRichText {
//                 html
//               }
//             }
//             bulletedContent {
//               text {
//                 id
//                 text
//               }
//             }
//             bulletImage {
//               fluid {
//                 src
//               }
//             }
//           }
//           contentCards {
//             contentName
//             title {
//               childContentfulRichText {
//                 html
//               }
//             }
//             bodyText {
//               childContentfulRichText {
//                 html
//               }
//             }
//             backgroundImage {
//               title
//               fluid {
//                 src
//               }
//             }
//           }
//         }
//       }
//     `
//   )
//   return contentfulPage
// }
