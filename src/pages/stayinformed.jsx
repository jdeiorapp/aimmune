import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

import SignUpHeader from "../components/form/SignUpHeader"
import SignUpForm from "../components/form/SignUpForm"

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
        contentfulGenericContent(contentName: { eq: "Sign Up Header" }) {
          childContentfulGenericContentTitleRichTextNode {
            json
          }
          bodyText {
            json
            childContentfulRichText {
              html
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SignUpHeader
        contentfulGenericContent={contentfulGenericContent}
        options={options}
      />
      <section className="signup-wrapper">
        <Container className="signup">
          <SignUpForm />
        </Container>
      </section>
    </Layout>
  )
}
