import React from "react"
import MainNav from "./MainNav"
import { Sticky } from "react-sticky"

export default props => (
  <Sticky topOffset={80}>
    {({ style }) => (
      <header style={{ ...style }} className="sticky-header">
        <MainNav currentPage={props.currentPage} />
      </header>
    )}
  </Sticky>
)
