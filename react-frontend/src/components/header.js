import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Edges from "./edges"
import * as theme from "../theme"

export default ({ siteTitle }) => (
  <Header>
    <Edges>
      <Nav>
        <h3>
          <Link to="/">{siteTitle}</Link>
        </h3>
      </Nav>
    </Edges>
  </Header>
)

const Header = styled.div`
  background: ${theme.colors.lightest};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  padding: 20px 0;
  box-shadow: ${theme.shadows[2]};
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${theme.colors.mid_light};
    }
  }
  h3 {
    margin: 0;
  }
`
