import React, { useState } from "react"
import { Container, Row, Col, Accordion, Card } from "react-bootstrap"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useAccordionToggle } from "react-bootstrap/AccordionToggle"

import Expand from "../../assets/images/expand.svg"
import CloseExpand from "../../assets/images/close-expand.svg"

export default props => {
  const [toggle, handleToggle] = useState(0)

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      handleToggle(toggle === eventKey ? null : eventKey)
    )

    return (
      <div
        className={toggle === eventKey ? "card-header expanded" : "card-header"}
        onClick={decoratedOnClick}
      >
        {children}
        <img
          src={toggle === eventKey ? CloseExpand : Expand}
          width="20"
          height="20"
        ></img>
      </div>
    )
  }

  return (
    <>
      <section className="faqs-nav d-md-none">
        <Container>
          <Row>
            <Col lg={{ span: 9, offset: 1 }}>
              <Row>
                <Col lg={3}>
                  <a href="#mobile-about">
                    {props.contentfulPage.section[0].sectionName}
                  </a>
                </Col>
                <Col lg={3}>
                  <a href="#mobile-benefits">
                    {props.contentfulPage.section[1].sectionName}
                  </a>
                </Col>
                <Col lg={5}>
                  <a href="#mobile-dosing">
                    {props.contentfulPage.section[2].sectionName}
                  </a>
                </Col>
                <Col lg={1}>
                  <a href="#mobile-support">
                    {props.contentfulPage.section[3].sectionName}
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <div id="mobile-about" />
      <section className="faqs d-md-none">
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
              <Accordion>
                {/* question 1 */}
                <Card>
                  <CustomToggle eventKey="0">
                    {documentToReactComponents(
                      props.contentfulPage.section[0].questions[0]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="0">
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[0].questions[0]
                              .bodyText.childContentfulRichText.html,
                        }}
                      ></div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[0]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[0]
                                  .bullets[0].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[0]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[0]
                                  .bullets[1].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[0]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[0]
                                  .bullets[2].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[0]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[0]
                                  .bullets[3].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[0]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[0]
                                  .bullets[4].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </Accordion.Collapse>
                </Card>

                {/* question 2 */}
                <Card>
                  <CustomToggle eventKey="1">
                    {documentToReactComponents(
                      props.contentfulPage.section[0].questions[1]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="1">
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[0].questions[1]
                              .bodyText.childContentfulRichText.html,
                        }}
                      ></div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[1]
                                  .bullets[0].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[1]
                                  .bullets[1].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[1]
                                  .bullets[2].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[1]
                                  .bullets[3].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[1]
                                  .bullets[4].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[0].questions[1]
                              .bullets[5].text.text,
                        }}
                      ></p>
                    </div>
                  </Accordion.Collapse>
                </Card>

                {/* question 3 */}
                <Card>
                  <CustomToggle eventKey="2">
                    {documentToReactComponents(
                      props.contentfulPage.section[0].questions[2]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="2">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          props.contentfulPage.section[0].questions[2].bodyText
                            .childContentfulRichText.html,
                      }}
                    ></div>
                  </Accordion.Collapse>
                </Card>

                {/* question 4 */}
                <Card>
                  <CustomToggle eventKey="3">
                    {documentToReactComponents(
                      props.contentfulPage.section[0].questions[3]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="3">
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[0].questions[3]
                              .bodyText.childContentfulRichText.html,
                        }}
                      ></div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[3]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[3]
                                  .bullets[0].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[3]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[3]
                                  .bullets[1].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </Accordion.Collapse>
                </Card>

                {/* question 5 */}
                <Card>
                  <CustomToggle eventKey="4">
                    {documentToReactComponents(
                      props.contentfulPage.section[0].questions[4]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="4">
                    <div>
                      {documentToReactComponents(
                        props.contentfulPage.section[0].questions[4].bodyText
                          .json,
                        props.options
                      )}
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[4]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[4]
                                  .bullets[0].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[0].questions[4]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[0].questions[4]
                                  .bullets[1].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </Accordion.Collapse>
                </Card>

                {/* question 6 */}
                <Card>
                  <CustomToggle eventKey="5">
                    {documentToReactComponents(
                      props.contentfulPage.section[0].questions[5]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="5">
                    <div>
                      {documentToReactComponents(
                        props.contentfulPage.section[0].questions[5].bodyText
                          .json,
                        props.options
                      )}
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
        <div id="mobile-benefits" />
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
              <Accordion>
                {/* question 1 */}
                <Card>
                  <CustomToggle eventKey="5">
                    {documentToReactComponents(
                      props.contentfulPage.section[1].questions[0]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="5">
                    <div>
                      {documentToReactComponents(
                        props.contentfulPage.section[1].questions[0].bodyText
                          .json,
                        props.options
                      )}
                    </div>
                  </Accordion.Collapse>
                </Card>

                {/* question 2 */}
                <Card>
                  <CustomToggle eventKey="6">
                    {documentToReactComponents(
                      props.contentfulPage.section[1].questions[1]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="6">
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[1].questions[1]
                              .bodyText.childContentfulRichText.html,
                        }}
                      ></div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[0].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[1].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[2].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[3].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[4].text.text,
                            }}
                          ></p>
                        </div>
                      </div>

                      <strong>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              props.contentfulPage.section[1].questions[1]
                                .bullets[5].text.text,
                          }}
                        ></p>
                      </strong>

                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[6].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[7].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[8].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[9].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[10].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[11].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[12].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[13].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[1]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[1]
                                  .bullets[14].text.text,
                            }}
                          ></p>
                        </div>
                      </div>

                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[1].questions[1]
                              .bullets[15].text.text,
                        }}
                      ></p>

                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[1].questions[1]
                              .bullets[16].text.text,
                        }}
                      ></p>
                    </div>
                  </Accordion.Collapse>
                </Card>

                {/* question 3 */}
                <Card>
                  <CustomToggle eventKey="7">
                    {documentToReactComponents(
                      props.contentfulPage.section[1].questions[2]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="7">
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[1].questions[2]
                              .bodyText.childContentfulRichText.html,
                        }}
                      ></div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[0].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[1].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[2].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[3].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[4].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[5].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[6].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[7].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[8].text.text,
                            }}
                          ></p>
                        </div>
                      </div>

                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[1].questions[2]
                              .bullets[9].text.text,
                        }}
                      ></p>

                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[10].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[11].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[12].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[13].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[14].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[1].questions[2]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[1].questions[2]
                                  .bullets[15].text.text,
                            }}
                          ></p>{" "}
                        </div>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[1].questions[2]
                              .bullets[16].text.text,
                        }}
                      ></p>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
        <div id="mobile-dosing" />
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
              <Accordion>
                {/* question 1 */}
                <Card>
                  <CustomToggle eventKey="8">
                    {documentToReactComponents(
                      props.contentfulPage.section[2].questions[0]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="8">
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[2].questions[0]
                              .bodyText.childContentfulRichText.html,
                        }}
                      ></div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[2].questions[0]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[2].questions[0]
                                  .bullets[0].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[2].questions[0]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[2].questions[0]
                                  .bullets[1].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[2].questions[0]
                              .bullets[2].text.text,
                        }}
                      ></p>
                    </div>
                  </Accordion.Collapse>
                </Card>

                {/* question 2 */}
                <Card>
                  <CustomToggle eventKey="9">
                    {documentToReactComponents(
                      props.contentfulPage.section[2].questions[1]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="9">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          props.contentfulPage.section[2].questions[1].bodyText
                            .childContentfulRichText.html,
                      }}
                    ></div>
                  </Accordion.Collapse>
                </Card>

                {/* question 3 */}
                <Card>
                  <CustomToggle eventKey="10">
                    {documentToReactComponents(
                      props.contentfulPage.section[2].questions[2]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="10">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          props.contentfulPage.section[2].questions[2].bodyText
                            .childContentfulRichText.html,
                      }}
                    ></div>
                  </Accordion.Collapse>
                </Card>

                {/* question 4 */}
                <Card>
                  <CustomToggle eventKey="11">
                    {documentToReactComponents(
                      props.contentfulPage.section[2].questions[3]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="11">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          props.contentfulPage.section[2].questions[3].bodyText
                            .childContentfulRichText.html,
                      }}
                    ></div>
                  </Accordion.Collapse>
                </Card>

                {/* question 5 */}
                <Card>
                  <CustomToggle eventKey="12">
                    {documentToReactComponents(
                      props.contentfulPage.section[2].questions[4]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="12">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          props.contentfulPage.section[2].questions[4].bodyText
                            .childContentfulRichText.html,
                      }}
                    ></div>
                  </Accordion.Collapse>
                </Card>

                {/* question 6 */}
                <Card>
                  <CustomToggle eventKey="13">
                    {documentToReactComponents(
                      props.contentfulPage.section[2].questions[5]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="13">
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            props.contentfulPage.section[2].questions[5]
                              .bodyText.childContentfulRichText.html,
                        }}
                      ></div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[2].questions[5]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[2].questions[5]
                                  .bullets[0].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[2].questions[5]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[2].questions[5]
                                  .bullets[1].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[2].questions[5]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[2].questions[5]
                                  .bullets[2].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[2].questions[5]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[2].questions[5]
                                  .bullets[3].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[2].questions[5]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[2].questions[5]
                                  .bullets[4].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[2].questions[5]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[2].questions[5]
                                  .bullets[5].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bullet">
                          <img
                            src={
                              props.contentfulPage.section[2].questions[5]
                                .bulletImage.fluid.src
                            }
                            width="12"
                          />
                        </div>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                props.contentfulPage.section[2].questions[5]
                                  .bullets[6].text.text,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </Accordion.Collapse>
                </Card>

                {/* question 7 */}
                <Card>
                  <CustomToggle eventKey="14">
                    {documentToReactComponents(
                      props.contentfulPage.section[2].questions[6]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="14">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          props.contentfulPage.section[2].questions[6].bodyText
                            .childContentfulRichText.html,
                      }}
                    ></div>
                  </Accordion.Collapse>
                </Card>

                {/* question 8 */}
                <Card>
                  <CustomToggle eventKey="15">
                    {documentToReactComponents(
                      props.contentfulPage.section[2].questions[7]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="15">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          props.contentfulPage.section[2].questions[7].bodyText
                            .childContentfulRichText.html,
                      }}
                    ></div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
        <div id="mobile-support" />
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
              <Accordion>
                {/* question 1 */}
                <Card>
                  <CustomToggle eventKey="16">
                    {documentToReactComponents(
                      props.contentfulPage.section[3].questions[0]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="16">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          props.contentfulPage.section[3].questions[0].bodyText
                            .childContentfulRichText.html,
                      }}
                    ></div>
                  </Accordion.Collapse>
                </Card>

                {/* question 2 */}
                <Card>
                  <CustomToggle eventKey="17">
                    {documentToReactComponents(
                      props.contentfulPage.section[3].questions[1]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="17">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          props.contentfulPage.section[3].questions[1].bodyText
                            .childContentfulRichText.html,
                      }}
                    ></div>
                  </Accordion.Collapse>
                </Card>

                {/* question 3 */}
                <Card>
                  <CustomToggle eventKey="18">
                    {documentToReactComponents(
                      props.contentfulPage.section[3].questions[2]
                        .childContentfulGenericContentTitleRichTextNode.json,
                      props.options
                    )}
                  </CustomToggle>
                  <Accordion.Collapse eventKey="18">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          props.contentfulPage.section[3].questions[2].bodyText
                            .childContentfulRichText.html,
                      }}
                    ></div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
