import React from "react";
import { Container } from "./styles";

export default function Repositories({ id, filter, name, demo, github }) {
  return (
    <Container id={id} name={filter}>
      <h1>{name}</h1>
      <div>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <button>Demo</button>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button>Github</button>
        </a>
      </div>
    </Container>
  );
}
