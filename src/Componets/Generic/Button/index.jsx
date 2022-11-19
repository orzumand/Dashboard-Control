import React from "react";
import { Container } from "./style";

const Button = ({ onClick, bg, width, height, children }) => {
  return (
    <Container onClick={onClick} bg={bg} width={width} height={height}>
      {children}
    </Container>
  );
};

export default Button;
