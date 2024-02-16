import React from "react"
import styled from "styled-components"

const StyledFig = styled.figure`
  background-color: black;
`

const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-top: 2rem;
  padding-bottom: 1rem;
`

const StyledCaption = styled.figcaption`
  color: white;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
`

export default function Figure({ imageURL, author, date}) {
    return (
      <StyledFig>
          <StyledImage src={imageURL} />
          <StyledCaption className="ImgD-A">Photo by {author} on {date}</StyledCaption>
        </StyledFig>
    )
  }
