import React from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
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
  const auth = false;
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
            !value.hidden && (
              <NavLink key={id} to={value.path}>
                <div className="title">
                  <Icons src={value.icons} />
                  {value.title}
                </div>

                <Count type={value.title}>32</Count>
              </NavLink>
            )
          );
        })}
      </Container>
      {auth ? <Outlet /> : <Navigate to="/signin" />}
    </Wrapper>
  );
};

export default Navbar;
