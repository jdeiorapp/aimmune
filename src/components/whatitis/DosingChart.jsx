import React, { useState } from "react"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import PeanutProtein from "../../assets/images/peanut_protein.png"
import FiveMG from "../../assets/images/fivemg.png"
import OneTwentyFiveMG from "../../assets/images/onetwentyfivemg.png"
import ThreeHundredMG from "../../assets/images/threehundredmg.png"

export default props => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  return (
    <Container className="dosing-chart">
      <Row>
        <Col className="text-center d-block d-lg-none">
          {documentToReactComponents(
            props.contentfulPage.contentCards[4]
              .childContentfulGenericContentTitleRichTextNode.json,
            props.options
          )}
        </Col>
      </Row>
      <Row className="d-none d-lg-block">
        <Col>
          <Controller>
            <Scene
              triggerHook="onLeave"
              duration={1000}
              offset={
                typeof window !== "undefined" && window.innerHeight > 850
                  ? -100
                  : 0
              }
              pin
            >
              {progress => (
                <div>
                  <Row>
                    <Col className="text-center">
                      {documentToReactComponents(
                        props.contentfulPage.contentCards[4]
                          .childContentfulGenericContentTitleRichTextNode.json,
                        props.options
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Timeline totalProgress={progress} paused>
                      <Tween from={{ alpha: 1 }} to={{ autoAlpha: 1 }}>
                        <Col id="animate_chart" className="text-center">
                          <div id="box_container">
                            <div
                              className="animate_chart_content"
                              id="box1"
                            ></div>
                            <div
                              className="animate_chart_content"
                              id="box2"
                            ></div>
                            <div
                              className="animate_chart_content"
                              id="box3"
                            ></div>
                            <div
                              className="animate_chart_content"
                              id="white_bar"
                            ></div>
                            <img
                              className="animate_chart_content"
                              id="peanut_protein"
                              src={PeanutProtein}
                              width="100"
                            ></img>
                            <Timeline
                              paused
                              progress={progress}
                              target={
                                <div
                                  className="animate_chart_content"
                                  id="progress_bar"
                                ></div>
                              }
                            >
                              <Tween to={{ alpha: 1, scaleX: 10 }}></Tween>
                              <Tween to={{ alpha: 1, scaleX: 251 }}></Tween>
                              {/* <Tween to={{ alpha: 1, scaleX: 819 }}></Tween> */}
                              <Tween to={{ alpha: 1, scaleX: 829 }}></Tween>
                            </Timeline>

                            <Timeline
                              paused
                              progress={progress}
                              target={
                                <img
                                  className="animate_chart_content"
                                  id="fivemg"
                                  src={FiveMG}
                                  width="52"
                                ></img>
                              }
                            >
                              <Tween to={{ alpha: 1, scale: 1.15 }} />
                              <Tween to={{ alpha: 0.2, scale: 1 }} />
                              <Tween to={{ alpha: 1, scale: 1 }} />
                            </Timeline>
                            <Timeline
                              paused
                              progress={progress}
                              target={
                                <img
                                  className="animate_chart_content"
                                  id="onetwentyfivemg"
                                  src={OneTwentyFiveMG}
                                  width="112"
                                ></img>
                              }
                            >
                              <Tween to={{ alpha: 0.2 }} />
                              <Tween to={{ alpha: 1, scale: 1.15 }} />
                              {/* <Tween to={{ alpha: 0.2, scale: 1 }} /> */}
                              <Tween to={{ alpha: 1, scale: 1 }} />
                            </Timeline>
                            <Timeline
                              paused
                              progress={progress}
                              target={
                                <img
                                  className="animate_chart_content"
                                  id="threehundredmg"
                                  src={ThreeHundredMG}
                                  width="191"
                                ></img>
                              }
                            >
                              <Tween to={{ alpha: 0.2 }} />
                              <Tween to={{ alpha: 0.2, scale: 1 }} />
                              <Tween to={{ alpha: 1, scale: 1.15 }} />
                              {/* <Tween to={{ alpha: 1 }} /> */}
                            </Timeline>
                          </div>

                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div
                                className="animate_chart_content body_copy"
                                id="body_copy1"
                                style={{ opacity: 1 }}
                              >
                                {documentToReactComponents(
                                  props.contentfulPage.contentCards[4]
                                    .cardTiles[0]
                                    .childContentfulGenericContentTitleRichTextNode
                                    .json,
                                  props.options
                                )}
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      props.contentfulPage.contentCards[4]
                                        .cardTiles[0].bodyText
                                        .childContentfulRichText.html,
                                  }}
                                ></div>
                              </div>
                            }
                          >
                            <Tween to={{ alpha: 1 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            {/* <Tween to={{ alpha: 0 }} /> */}
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div
                                className="animate_chart_content body_copy"
                                id="body_copy2"
                              >
                                {documentToReactComponents(
                                  props.contentfulPage.contentCards[4]
                                    .cardTiles[1]
                                    .childContentfulGenericContentTitleRichTextNode
                                    .json,
                                  props.options
                                )}
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      props.contentfulPage.contentCards[4]
                                        .cardTiles[1].bodyText
                                        .childContentfulRichText.html,
                                  }}
                                ></div>
                              </div>
                            }
                          >
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 1 }} />
                            <Tween to={{ alpha: 1 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            {/* <Tween to={{ alpha: 0 }} /> */}
                          </Timeline>
                          <Timeline
                            paused
                            progress={progress}
                            target={
                              <div
                                className="animate_chart_content body_copy"
                                id="body_copy3"
                              >
                                {documentToReactComponents(
                                  props.contentfulPage.contentCards[4]
                                    .cardTiles[2]
                                    .childContentfulGenericContentTitleRichTextNode
                                    .json,
                                  props.options
                                )}
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      props.contentfulPage.contentCards[4]
                                        .cardTiles[2].bodyText
                                        .childContentfulRichText.html,
                                  }}
                                ></div>
                              </div>
                            }
                          >
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 1 }} />
                            {/* <Tween to={{ alpha: 0 }} /> */}
                          </Timeline>
                          {/* <Timeline
                            paused
                            progress={progress}
                            target={
                              <div
                                className="animate_chart_content body_copy"
                                id="body_copy4"
                              >
                                {documentToReactComponents(
                                  props.contentfulPage.contentCards[4]
                                    .cardTiles[3]
                                    .childContentfulGenericContentTitleRichTextNode
                                    .json,
                                  props.options
                                )}
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      props.contentfulPage.contentCards[4]
                                        .cardTiles[3].bodyText
                                        .childContentfulRichText.html,
                                  }}
                                ></div>
                              </div>
                            }
                          >
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 0 }} />
                            <Tween to={{ alpha: 1 }} />
                          </Timeline> */}
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
      <Row>
        <Col className="d-block d-lg-none">
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
            interval={null}
          >
            <Carousel.Item className="text-center">
              <img
                className="d-block"
                src={
                  props.contentfulPage.contentCards[4].cardTiles[0]
                    .backgroundImage.file.url
                }
                alt="First slide"
              />
              {documentToReactComponents(
                props.contentfulPage.contentCards[4].cardTiles[0]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[4].cardTiles[0].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <img
                className="d-block"
                src={
                  props.contentfulPage.contentCards[4].cardTiles[1]
                    .backgroundImage.file.url
                }
                alt="Second slide"
              />
              {documentToReactComponents(
                props.contentfulPage.contentCards[4].cardTiles[1]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[4].cardTiles[1].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <img
                className="d-block"
                src={
                  props.contentfulPage.contentCards[4].cardTiles[2]
                    .backgroundImage.file.url
                }
                alt="Third slide"
              />
              {documentToReactComponents(
                props.contentfulPage.contentCards[4].cardTiles[2]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[4].cardTiles[2].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Carousel.Item>
            {/* <Carousel.Item className="text-center">
              <img
                className="d-block"
                src={MobileThreeHundredMG}
                alt="Third slide"
              />
              {documentToReactComponents(
                props.contentfulPage.contentCards[4].cardTiles[3]
                  .childContentfulGenericContentTitleRichTextNode.json,
                props.options
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.contentfulPage.contentCards[4].cardTiles[3].bodyText
                      .childContentfulRichText.html,
                }}
              ></div>
            </Carousel.Item> */}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}
