import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, Wrapper } from "./styled";
import { navbar } from "../../utils/navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        {navbar.map((value) => {
          return <NavLink to={value.path}>{value.title}</NavLink>;
        })}
        <NavLink />
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
