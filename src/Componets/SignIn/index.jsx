import React from "react";
import {
  Container,
  Form,
  Input,
  Left,
  Logo,
  Right,
  Title,
  TopTitle,
} from "./styled";
import Img from "../../Assets/Img/Logo.png";
import { Button } from "../Generic";

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
        <Form>
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
            <Title.Subs>
              O'zbekiston Respublikasi Madaniyat Vazirligi
            </Title.Subs>
            FILARMONIYA TIZIMIGA KIRISH
          </Title>
          <TopTitle>Login</TopTitle>
          <Input>
            <Input.User />
            <Input.Input placeholder="Kiriting" />
          </Input>
          <TopTitle>Parol</TopTitle>
          <Input>
            <Input.Lock />
            <Input.Input type="password" placeholder="**********" />
          </Input>

          <div>
            <Button bg={"#0018EF"}>TIZIMGA KIRISH</Button>
          </div>
        </Form>
      </Right>
    </Container>
  );
};

export default SignIn;
