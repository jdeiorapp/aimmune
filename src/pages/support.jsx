import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SupportCard from "../components/support/SupportCard"
import PharmacyCard from "../components/pharmacy/PharmacyCard"
import CaregiverCard from "../components/caregiver/CaregiverCard"

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
        contentfulPage(page: { eq: "Support" }) {
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
            bodyText {
              childContentfulRichText {
                html
              }
            }
            backgroundImage {
              file {
                url
              }
            }
            bulletImage {
              file {
                url
              }
            }
            bullets {
              ... on ContentfulBulletContent {
                childContentfulBulletContentTextTextNode {
                  text
                }
              }
              ... on ContentfulGenericContent {
                bodyText {
                  json
                  childContentfulRichText {
                    html
                  }
                }
              }
            }
            buttonText
            buttonLink
            footnote {
              childContentfulRichText {
                html
              }
            }
            cardTiles {
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
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout
      currentPage={"support"}
      title={contentfulPage.title}
      description={contentfulPage.description.description}
      keywords={
        "PALFORZIA, PALFORZIA pathway program, PALFORZIA pathway, PALFORZIA insurance coverage, PALFORZIA REMS, PALFORZIA REMS enrollment, PALFORZIA risk evaluation and mitigation strategy program, PALFORZIA support, PALFORZIA patient support, PALFORZIA resources, PALFORZIA patient resources, PALFORZIA cost, PALFORZIA financial support, PALFORZIA eligibility"
      }
    >
      <section className="support-wrapper">
        <Container className="support">
          <Row className="support-header">
            <Col lg={6}>
              {documentToReactComponents(
                contentfulPage.contentCards[0]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
            </Col>
            <Col lg={6} sm={12}>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    contentfulPage.contentCards[0].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Col>
          </Row>
          <SupportCard contentfulPage={contentfulPage} options={options} />
        </Container>
      </section>
      <section className="pharmacy-wrapper">
        <Container className="pharmacy">
          <Row className="pharmacy-header">
            <div id="starting-palforzia"></div>
            <Col lg={6} sm={12}>
              {documentToReactComponents(
                contentfulPage.contentCards[5]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
            </Col>
            <Col lg={6} sm={12}>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    contentfulPage.contentCards[5].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Col>
          </Row>
          <PharmacyCard contentfulPage={contentfulPage} options={options} />
          <div className="outer-caregiver-card-container">
            <CaregiverCard contentfulPage={contentfulPage} options={options} />
          </div>
        </Container>
      </section>
      <section className="support-cta">
        <Container className="support">
          <Row>
            <Col className="text-center" xs={{ span: 8, offset: 2 }}>
              {documentToReactComponents(
                contentfulPage.contentCards[9]
                  .childContentfulGenericContentTitleRichTextNode.json,
                options
              )}
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 4, offset: 4 }} className="text-center">
              {documentToReactComponents(
                contentfulPage.contentCards[9]
                  .childContentfulGenericContentBodyTextRichTextNode.json,
                options
              )}
            </Col>
          </Row>
          <Row>
            <Col className="btn-wrapper">
              <Link
                to={contentfulPage.contentCards[9].buttonLink}
                className="text-center"
              >
                {contentfulPage.contentCards[9].buttonText}
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
