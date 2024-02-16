import React from "react";
import Figure from "./Photo";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 5px solid darkslateblue;
  border-radius: 12px;
  padding: 2rem;

  h2 {
    font-size: 50px;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
`

export default function Card({ title, text, imageURL, author, date }) {
    return (
      <StyledCard className='card'>
        <h2 id="CardTitle">{title}</h2>
        <p id="AuthNotes">{text}</p>
        <Figure
        imageURL={imageURL}
        date={date}
        author={author}
        />
      </StyledCard>
    )
  }