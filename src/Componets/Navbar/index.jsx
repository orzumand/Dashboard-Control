import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Container,
  Logo,
  Titles,
  Wrapper,
  Subtitle,
  Icons,
  Count,
} from "./styled";
import { navbar } from "../../utils/navbar";
import img from "../../Assets/Img/Logo.png";
const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <Logo.Img src={img} />
          <Titles>
            O'z.Davlat
            <br />
            FILARMONIYASI
            <Subtitle>Axborot tizimi</Subtitle>
          </Titles>
        </Logo>
        <Subtitle>BOSHQARUV PANELI</Subtitle>
        {navbar.map((value, id) => {
          return (
            <NavLink key={id} to={value.path}>
              <div className="title">
                <Icons src={value.icons} />
                {value.title}
              </div>

              <Count type={value.title}>32</Count>
            </NavLink>
          );
        })}
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
