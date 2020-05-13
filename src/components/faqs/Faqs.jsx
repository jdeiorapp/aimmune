import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import MobileFaqs from "./MobileFaqs"

export default props => {
  return (
    <>
      <section className="faqs-nav d-none d-md-block">
        <Container>
          <Row>
            <Col lg={{ span: 9, offset: 1 }} className="anchors">
              <div>
                <a href="#about">
                  {props.contentfulPage.section[0].sectionName}
                </a>
              </div>
              <div>
                <a href="#benefits">
                  {props.contentfulPage.section[1].sectionName}
                </a>
              </div>
              <div>
                <a href="#dosing">
                  {props.contentfulPage.section[2].sectionName}
                </a>
              </div>
              <div>
                <a href="#support">
                  {props.contentfulPage.section[3].sectionName}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div id="about" />
      <section className="faqs d-none d-md-block">
        <Container className="faqs-section">
          <Row>
            <Col lg={{ span: 3, offset: 1 }}>
              {documentToReactComponents(
                props.contentfulPage.section[0]
                  .childContentfulFaqSectionsSectionTitleRichTextNode.json,
                props.options
              )}
            </Col>
            <Col lg={7}>
              {/* question 1 */}
              {documentToReactComponents(
                props.contentfulPage.section[0].questions[0]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[0].questions[0].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[0].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[0].bullets[0]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[0].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[0].bullets[1]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[0].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[0].bullets[2]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[0].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[0].bullets[3]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[0].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[0].bullets[4]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>

              {/* question 2 */}
              {documentToReactComponents(
                props.contentfulPage.section[0].questions[1]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[0].questions[1].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[1].bullets[0]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[1].bullets[1]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[1].bullets[2]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[1].bullets[3]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[1].bullets[4]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[0].questions[1].bullets[5].text
                      .text,
                }}
              ></p>

              {/* question 3 */}
              {documentToReactComponents(
                props.contentfulPage.section[0].questions[2]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[0].questions[2].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>

              {/* question 4 */}
              {documentToReactComponents(
                props.contentfulPage.section[0].questions[3]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[0].questions[3].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[3].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[3].bullets[0]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[3].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[3].bullets[1]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>

              {/* question 5 */}
              {documentToReactComponents(
                props.contentfulPage.section[0].questions[4]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              {documentToReactComponents(
                props.contentfulPage.section[0].questions[4].bodyText.json,
                props.options
              )}
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[4].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[4].bullets[0]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[0].questions[4].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[0].questions[4].bullets[1]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>

              {/* question 6 */}
              {documentToReactComponents(
                props.contentfulPage.section[0].questions[5]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              {documentToReactComponents(
                props.contentfulPage.section[0].questions[5].bodyText.json,
                props.options
              )}
            </Col>
          </Row>
        </Container>
        <div id="benefits" />
        <Container className="faqs-section">
          <Row>
            <Col lg={{ span: 3, offset: 1 }}>
              {documentToReactComponents(
                props.contentfulPage.section[1]
                  .childContentfulFaqSectionsSectionTitleRichTextNode.json,
                props.options
              )}
            </Col>
            <Col lg={7}>
              {/* question 1 */}
              {documentToReactComponents(
                props.contentfulPage.section[1].questions[0]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              {documentToReactComponents(
                props.contentfulPage.section[1].questions[0].bodyText.json,
                props.options
              )}

              {/* question 2 */}
              {documentToReactComponents(
                props.contentfulPage.section[1].questions[1]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[1].questions[1].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[0]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[1]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[2]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[3]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[4]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>

              <strong>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      props.contentfulPage.section[1].questions[1].bullets[5]
                        .text.text,
                  }}
                ></p>
              </strong>

              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[6]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[7]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[8]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[9]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[10]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[11]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[12]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[13]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[1].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[1].bullets[14]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>

              <p
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[1].questions[1].bullets[15]
                      .text.text,
                }}
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[1].questions[1].bullets[16]
                      .text.text,
                }}
              ></p>

              {/* question 3 */}
              {documentToReactComponents(
                props.contentfulPage.section[1].questions[2]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[1].questions[2].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[0]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[1]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[2]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[3]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[4]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[5]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[6]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[7]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[8]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>

              <p
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[1].questions[2].bullets[9].text
                      .text,
                }}
              ></p>

              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[10]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[11]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[12]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[13]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[14]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[1].questions[2].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[1].questions[2].bullets[15]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[1].questions[2].bullets[16]
                      .text.text,
                }}
              ></p>
            </Col>
          </Row>
        </Container>
        <div id="dosing" />
        <Container className="faqs-section">
          <Row>
            <Col lg={{ span: 3, offset: 1 }}>
              {documentToReactComponents(
                props.contentfulPage.section[2]
                  .childContentfulFaqSectionsSectionTitleRichTextNode.json,
                props.options
              )}
            </Col>
            <Col lg={7}>
              {/* question 1 */}
              {documentToReactComponents(
                props.contentfulPage.section[2].questions[0]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[2].questions[0].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[2].questions[0].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[2].questions[0].bullets[0]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[2].questions[0].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[2].questions[0].bullets[1]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[2].questions[0].bullets[2].text
                      .text,
                }}
              ></p>

              {/* question 2 */}
              {documentToReactComponents(
                props.contentfulPage.section[2].questions[1]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[2].questions[1].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>

              {/* question 3 */}
              {documentToReactComponents(
                props.contentfulPage.section[2].questions[2]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[2].questions[2].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>

              {/* question 4 */}
              {documentToReactComponents(
                props.contentfulPage.section[2].questions[3]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[2].questions[3].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>

              {/* question 5 */}
              {documentToReactComponents(
                props.contentfulPage.section[2].questions[4]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[2].questions[4].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>

              {/* question 6 */}
              {documentToReactComponents(
                props.contentfulPage.section[2].questions[5]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[2].questions[5].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[2].questions[5].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[2].questions[5].bullets[0]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[2].questions[5].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[2].questions[5].bullets[1]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[2].questions[5].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[2].questions[5].bullets[2]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[2].questions[5].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[2].questions[5].bullets[3]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[2].questions[5].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[2].questions[5].bullets[4]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[2].questions[5].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[2].questions[5].bullets[5]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bullet">
                  <img
                    src={
                      props.contentfulPage.section[2].questions[5].bulletImage
                        .fluid.src
                    }
                    width="12"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        props.contentfulPage.section[2].questions[5].bullets[6]
                          .text.text,
                    }}
                  ></p>
                </div>
              </div>

              {/* question 7 */}
              {documentToReactComponents(
                props.contentfulPage.section[2].questions[6]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[2].questions[6].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>

              {/* question 8 */}
              {documentToReactComponents(
                props.contentfulPage.section[2].questions[7]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[2].questions[7].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Col>
          </Row>
        </Container>
        <div id="support" />
        <Container>
          <Row>
            <Col lg={{ span: 3, offset: 1 }}>
              {documentToReactComponents(
                props.contentfulPage.section[3]
                  .childContentfulFaqSectionsSectionTitleRichTextNode.json,
                props.options
              )}
            </Col>
            <Col lg={7}>
              {/* question 1 */}
              {documentToReactComponents(
                props.contentfulPage.section[3].questions[0]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[3].questions[0].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>

              {/* question 2 */}
              {documentToReactComponents(
                props.contentfulPage.section[3].questions[1]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[3].questions[1].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>

              {/* question 3 */}
              {documentToReactComponents(
                props.contentfulPage.section[3].questions[2]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.section[3].questions[2].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Col>
          </Row>
        </Container>
      </section>
      <MobileFaqs
        contentfulPage={props.contentfulPage}
        options={props.options}
      />
    </>
  )
}
