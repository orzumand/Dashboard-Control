import React from "react";
import { Container } from "./style";

const Button = ({ bg, width, height, children }) => {
  return (
    <Container bg={bg} width={width} height={height}>
      {children}
    </Container>
  );
};

export default Button;
