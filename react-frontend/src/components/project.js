import React from "react"
import styled from "styled-components"
import * as theme from "../theme"
import BackgroundImage from "./backgroundImage"

export default ({ name, uri, bg_image }) => {
  return (
    <MyAnchor href={uri}>
      <Container>
        <MyBackgroundImage image={bg_image} />
      </Container>
      <h4> {name} </h4>
    </MyAnchor>
  )
}

const MyBackgroundImage = styled(BackgroundImage)`
  position: relative;
  width: 100%;
`
const MyAnchor = styled.a`
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${theme.colors.mid_light};
  box-shadow: ${theme.shadows[2]};
  width: 100%;
  @media screen and (min-width: 350px) {
    width: 48%;
  }
  @media screen and (min-width: 700px) {
    width: 30%;
    padding: 10px 10 0px 10px;
  }
  h4 {
    padding: 5px;
    margin-bottom: 0px;
    background-color: ${theme.colors.mid_dark};
    color: ${theme.colors.lightest};
    box-shadow: ${theme.shadows[1]};
  }
`
const Container = styled.div`
  position: relative;
`
