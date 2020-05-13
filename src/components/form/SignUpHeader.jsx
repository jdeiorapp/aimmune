import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default props => {
  return (
    <section className="page-header">
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} className="text-center">
            {documentToReactComponents(
              props.contentfulGenericContent
                .childContentfulGenericContentTitleRichTextNode.json,
              props.options
            )}
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            {documentToReactComponents(
              props.contentfulGenericContent
                .bodyText.json,
              props.options
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
