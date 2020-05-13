import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Home from "../components/home/Home"

export default () => {
  const { contentfulPage } = useStaticQuery(
    graphql`
      query {
        contentfulPage(page: { eq: "Home" }) {
          title
          description {
            description
          }
          urlPath
        }
      }
    `
  )

  return (
    <Layout currentPage="home" title={contentfulPage.title} description={contentfulPage.description.description}>
      <Home  />
    </Layout>
  )
}

// Get metadata on Homepage
// const getMetadata = () => {
//   const { contentfulPage } = useStaticQuery(
//     graphql`
//       query {
//         contentfulPage(page: { eq: "Home" }) {
//           title
//           description {
//             description
//           }
//           urlPath
//         }
//       }
//     `
//   )
//   return contentfulPage
// }
