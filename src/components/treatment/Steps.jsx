import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default props => {
  return (
    <Container className="power-steps">
      <Row className="d-block d-lg-none">
        <Col className="text-center">
          {documentToReactComponents(
            props.contentfulPage.contentCards[1]
              .childContentfulGenericContentTitleRichTextNode.json,
            props.options
          )}
        </Col>
      </Row>
      <Row className="d-block d-lg-none mobile-steps">
        <Col className="sections">
          <img
            src={
              props.contentfulPage.contentCards[1].cardTiles[0].backgroundImage
                .fluid.src
            }
            width="100%"
          />
          <h5>
            <strong
              dangerouslySetInnerHTML={{
                __html:
                  props.contentfulPage.contentCards[1].cardTiles[0].title
                    .content[0].content[0].value,
              }}
            ></strong>
            <Col className="mobile-progress-bar">
              <div className="mobile-line" />
              <div className="mobile_green_dots" />
              <div className="mobile_green_dots" style={{ top: "512px" }} />
              <div className="mobile_green_dots" style={{ top: "1225px" }} />
            </Col>
          </h5>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[1].cardTiles[0].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
        </Col>
        <Col className="sections">
          <img
            src={
              props.contentfulPage.contentCards[1].cardTiles[1].backgroundImage
                .fluid.src
            }
            width="100%"
          />
          <h5>
            <strong
              dangerouslySetInnerHTML={{
                __html:
                  props.contentfulPage.contentCards[1].cardTiles[1].title
                    .content[0].content[0].value,
              }}
            ></strong>
          </h5>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[1].cardTiles[1].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
        </Col>
        <Col className="sections">
          <img
            src={
              props.contentfulPage.contentCards[1].cardTiles[2].backgroundImage
                .fluid.src
            }
            width="100%"
          />
          <h5>
            <strong
              dangerouslySetInnerHTML={{
                __html:
                  props.contentfulPage.contentCards[1].cardTiles[2].title
                    .content[0].content[0].value,
              }}
            ></strong>
          </h5>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.contentfulPage.contentCards[1].cardTiles[2].bodyText
                  .childContentfulRichText.html,
            }}
          ></div>
        </Col>
      </Row>
      <Row className="d-none d-lg-block">
        <Col>
          <Controller>
            <Scene triggerHook="onLeave" duration={2000} offset={-100} pin>
              {progress => (
                <div>
                  <Row>
                    <Col className="text-center" lg={{ span: 8, offset: 2 }}>
                      {documentToReactComponents(
                        props.contentfulPage.contentCards[1]
                          .childContentfulGenericContentTitleRichTextNode.json,
                        props.options
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Timeline totalProgress={progress} paused>
                      <Tween from={{ alpha: 1 }} to={{ autoAlpha: 1 }}>
                        <Col id="steps" lg={{ span: 12 }}>
                          <Timeline
                            paused
                            progress={progress}
                            target={<div className="three_steps" id="line" />}
                          >
                            <Tween
                              from={{
                                css: {
                                  alpha: 0.2,
                                },
                              }}
                              to={{
                                css: {
                                  scaleY: 410,
                                },
                                ease: "Power2.easeInOut",
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div className="three_steps" id="progress_bar" />
                            }
                          >
                            <Tween
                              from={{
                                css: {
                                  alpha: 0,
                                },
                                ease: "Power2.easeInOut",
                              }}
                              to={{
                                css: {
                                  scaleY: 165,
                                },
                                ease: "Power2.easeInOut",
                              }}
                            />
                            <Tween
                              to={{
                                css: {
                                  scaleY: 320,
                                },
                                ease: "Power2.easeInOut",
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div
                                className="three_steps green_dots"
                                id="dot1"
                              />
                            }
                          >
                            <Tween
                              to={{
                                alpha: 1,
                                scale: 1.3,
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <img
                                className="three_steps images"
                                id="image1"
                                src={
                                  props.contentfulPage.contentCards[1]
                                    .cardTiles[0].backgroundImage.fluid.src
                                }
                                style={{ opacity: "1" }}
                              />
                            }
                          >
                            <Tween
                              from={{
                                css: {
                                  alpha: 1,
                                },
                                ease: "Power2.easeInOut",
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div className="three_steps" id="copy1">
                                <h5>
                                  <strong
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        props.contentfulPage.contentCards[1]
                                          .cardTiles[0].title.content[0]
                                          .content[0].value,
                                    }}
                                  ></strong>
                                </h5>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      props.contentfulPage.contentCards[1]
                                        .cardTiles[0].bodyText
                                        .childContentfulRichText.html,
                                  }}
                                ></div>
                              </div>
                            }
                          >
                            <Tween
                              from={{
                                css: {
                                  alpha: 0.2,
                                },
                                ease: "Power2.easeInOut",
                              }}
                              to={{
                                alpha: 1,
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div
                                className="three_steps green_dots"
                                id="dot2"
                                style={{ top: "170px", opacity: "0" }}
                              />
                            }
                          >
                            <Tween
                              to={{
                                alpha: 0,
                                scale: 1.3,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 0.5,
                                scale: 1.3,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 1,
                                scale: 1.3,
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div
                                className="three_steps outlined_dots"
                                id="outlined_dot1"
                              />
                            }
                          >
                            <Tween
                              from={{
                                css: {
                                  alpha: 0.2,
                                },
                                ease: "Power2.easeInOut",
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <img
                                className="three_steps images"
                                id="image2"
                                src={
                                  props.contentfulPage.contentCards[1]
                                    .cardTiles[1].backgroundImage.fluid.src
                                }
                              />
                            }
                          >
                            <Tween
                              to={{
                                alpha: 0,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 1,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 0,
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div className="three_steps" id="copy2">
                                <h5>
                                  <strong
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        props.contentfulPage.contentCards[1]
                                          .cardTiles[1].title.content[0]
                                          .content[0].value,
                                    }}
                                  ></strong>
                                </h5>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      props.contentfulPage.contentCards[1]
                                        .cardTiles[1].bodyText
                                        .childContentfulRichText.html,
                                  }}
                                ></div>
                              </div>
                            }
                          >
                            <Tween
                              to={{
                                alpha: 0.2,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 1,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 1,
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div
                                className="three_steps green_dots"
                                id="dot3"
                                style={{ top: "425px", opacity: "0" }}
                              />
                            }
                          >
                            <Tween
                              to={{
                                alpha: 0,
                                scale: 1.3,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 0,
                                scale: 1.3,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 1,
                                scale: 1.3,
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div
                                className="three_steps outlined_dots"
                                id="outlined_dot2"
                                style={{ top: "425px" }}
                              />
                            }
                          >
                            <Tween
                              from={{
                                css: {
                                  alpha: 0.2,
                                },
                                ease: "Power2.easeInOut",
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <img
                                className="three_steps images"
                                id="image3"
                                src={
                                  props.contentfulPage.contentCards[1]
                                    .cardTiles[2].backgroundImage.fluid.src
                                }
                              />
                            }
                          >
                            <Tween
                              to={{
                                alpha: 0,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 0,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 1,
                              }}
                            />
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div className="three_steps" id="copy3">
                                <h5>
                                  <strong
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        props.contentfulPage.contentCards[1]
                                          .cardTiles[2].title.content[0]
                                          .content[0].value,
                                    }}
                                  ></strong>
                                </h5>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      props.contentfulPage.contentCards[1]
                                        .cardTiles[2].bodyText
                                        .childContentfulRichText.html,
                                  }}
                                ></div>
                              </div>
                            }
                          >
                            <Tween
                              to={{
                                alpha: 0.2,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 0.2,
                              }}
                            />
                            <Tween
                              to={{
                                alpha: 1,
                              }}
                            />
                          </Timeline>
                        </Col>
                      </Tween>
                    </Timeline>
                  </Row>
                </div>
              )}
            </Scene>
          </Controller>
        </Col>
      </Row>
    </Container>
  )
}
