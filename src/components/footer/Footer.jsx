import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default () => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
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

  const { contentfulGenericContent } = useStaticQuery(
    graphql`
      query {
        contentfulGenericContent(contentName: { eq: "Footer" }) {
          bodyText {
            json
            childContentfulRichText {
              html
            }
          }
          backgroundImage {
            file {
              url
            }
          }
          buttonLink
          cardTiles {
            bodyText {
              json
              childContentfulRichText {
                html
              }
            }
          }
        }
      }
    `
  )

  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <nav className="bottom-nav-links text-white">
              <ul>
                <li>
                  <Link to="/sitemap">Site Map</Link>
                </li>
                <li>
                  <a
                    href="https://www.aimmune.com/terms-of-use"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.aimmune.com/privacy-notice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Notice
                  </a>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
                <li>
                  <a href="tel:+18447253679" className="phone-link">
                    <img
                      src={require("../../assets/images/Phone.png")}
                      width="20"
                      height="20"
                    />
                    <span className="phone-number">1-844-PALFORZ</span>
                  </a>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
        <Row className="d-none d-lg-block">
          <Col className="questions">
            {documentToReactComponents(
              contentfulGenericContent.cardTiles[0].bodyText.json,
              options
            )}
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 9 }} className="footer-left">
            <nav className="bottom-nav-links-mobile text-white">
              <ul>
                <li>
                  <Link to="/sitemap">Site Map</Link>
                </li>
                <li>
                  <a
                    href="https://www.aimmune.com/terms-of-use"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.aimmune.com/privacy-notice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Notice
                  </a>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
                <li>
                  <a href="tel:+18447253679" className="d-flex phone-link">
                    <img
                      src={require("../../assets/images/Phone.png")}
                      width="20"
                      height="20"
                    />
                    <span className="phone-number">1-844-PALFORZ</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="d-lg-none questions">
              {documentToReactComponents(
                contentfulGenericContent.cardTiles[0].bodyText.json,
                options
              )}
            </div>
            <a
              href={contentfulGenericContent.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-logo"
            >
              <img
                height="117"
                src={contentfulGenericContent.backgroundImage.file.url}
                width="250"
                alt="Aimmune Therapeutics logo"
              />
            </a>
            {documentToReactComponents(
              contentfulGenericContent.bodyText.json,
              options
            )}
          </Col>
          <Col md={{ span: 3 }} className="footer-right">
            <a
              href={contentfulGenericContent.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-logo"
            >
              <img
                alt="Aimmune™ Therapeutics logo"
                height="117"
                width="250"
                src={contentfulGenericContent.backgroundImage.file.url}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
