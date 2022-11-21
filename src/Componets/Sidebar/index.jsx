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
  Out,
} from "./styled";
import { navbar } from "../../utils/navbar";
import img from "../../Assets/Img/Logo.png";
const Sidebar = () => {
  const auth = true;
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
            !value.private && (
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
      <Out>{auth ? <Outlet /> : <Navigate to="/signin" />}</Out>
    </Wrapper>
  );
};

export default Sidebar;
