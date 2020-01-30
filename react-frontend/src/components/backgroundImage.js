import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export default ({ image, ...rest }) => {
  return (
    <BackgroundImage {...rest}>
      <Img fluid={image} className="bg-img" />
    </BackgroundImage>
  )
}

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .bg-img {
    width: 100%;
    height: 100%;
  }
`
