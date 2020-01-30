import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Edges from "./edges"
import * as theme from "../theme"
import Project from "./project"

export default props => {
  const { projectOne, projectTwo, projectThree } = useStaticQuery(graphql`
    query {
      projectOne: file(relativePath: { eq: "octocat.png" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectTwo: file(relativePath: { eq: "octocat.png" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectThree: file(relativePath: { eq: "octocat.png" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SectionHeading>Check out my Repos</SectionHeading>
      <Container>
        <MyProject
          url="#"
          name="Project One"
          bg_image={projectOne.childImageSharp.fluid}
        />
        <MyProject
          url="#"
          name="Project Two"
          bg_image={projectTwo.childImageSharp.fluid}
        />
        <MyProject
          url="#"
          name="Project Three"
          bg_image={projectThree.childImageSharp.fluid}
        />
      </Container>
    </>
  )
}

const SectionHeading = styled.h1`
  text-align: center;
  margin-top: 10px;
`

const Container = styled(Edges)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  padding: 20px;
`

const MyProject = styled(Project)`
  position: relative;
`
