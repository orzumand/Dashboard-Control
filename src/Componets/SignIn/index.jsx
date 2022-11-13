import React from "react";
import { Container, Left, Logo, Right, Title } from "./styled";
import Img from "../../Assets/Img/Logo.png";
const SignIn = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <Logo.Img src={Img} />
          <Logo.Title>
            O'z. Davlat
            <br /> Filarmoniyasi
            <Logo.Title.Subtitle>Axborot tizimi</Logo.Title.Subtitle>
          </Logo.Title>
        </Logo>
      </Left>
      <Right>
        <Logo>
          <Logo.Img width={80} src={Img} />
          <Logo.Title color={"black"} fontSize={20}>
            O'z. Davlat
            <br /> Filarmoniyasi
            <Logo.Title.Subtitle fontSize={15}>
              Axborot tizimi
            </Logo.Title.Subtitle>
          </Logo.Title>
        </Logo>
        <Title>
          <Title.Subs>O'zbekiston Respublikasi Madaniyat Vazirligi</Title.Subs>
          FILARMONIYA TIZIMIGA KIRISH
        </Title>
      </Right>
    </Container>
  );
};

export default SignIn;
