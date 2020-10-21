import React from "react"
import { css } from "@emotion/core"
import ScrollUpButton from 'react-scroll-up-button'

import Header from "./header"
import Footer from "./footer"

const MyCustomReactComponent = () => {
  return (
    <div>Go Back Up</div>
  )
}

export default ({ children }) => {
  return (
    <div
      css={css`
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
      `}
    >
      <Header />
      {children}
      <Footer />
      <ScrollUpButton
        ContainerClassName='AnyClassForContainer'
        TransitionClassName='AnyClassForTransition'
      >
        <MyCustomReactComponent />
      </ScrollUpButton>
    </div>
  )
}
