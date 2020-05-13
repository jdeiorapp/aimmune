import React from "react"
import { Helmet } from "react-helmet"
import Indication from "./header/Indication"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Isi from "./isi/Isi"
import { StickyContainer } from "react-sticky"

import "../pages/index.scss"

export default props => (
  <div className="layout">
    <StickyContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/779260/6481412/css/fonts.css"
        />
      </Helmet>
      <Indication />
      <Header currentPage={props.currentPage} />
      <div className="main">{props.children}</div>
      <Isi />
      <Footer />
    </StickyContainer>
  </div>
)
