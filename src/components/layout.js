import React from "react"
import { css } from "@emotion/core"
import ScrollUpButton from 'react-scroll-up-button'
import { FaArrowUp } from 'react-icons/fa'

import Header from "./header"
import Footer from "./footer"

const MyCustomReactComponent = () => {
  return (
    <div
      css={css`
      width: 100%;
      height: 100%;
        background-color: black;
      `}
    ><FaArrowUp css={css`
      color: black
    `} /></div>
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
