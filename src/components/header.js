import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"

export default ({ children }) => {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </header>
  )
}
