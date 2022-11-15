import React from "react";
import Navbar from "../Navbar";
import { Card, CardTitle, CardWrapper, Container, Icon, Main } from "./styled";

const Asosiy = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <div className="mainTitle">Asosiy</div>
        <CardWrapper>
          <Card>
            <Icon type={"first"}>
              <Icon.First />
            </Icon>
            <CardTitle>
              <CardTitle.Title>
                Tashkilot normativ-huquqiy hujjatlari
              </CardTitle.Title>
              <CardTitle.Sub> Mavjud: 125 ta</CardTitle.Sub>
            </CardTitle>
          </Card>
          <Card>
            <Icon type={"second"}>
              <Icon.Second />
            </Icon>
            <CardTitle>
              <CardTitle.Title>
                Mavjud loyiha hujjatlari va <br /> tarkibiy qismlari
              </CardTitle.Title>
              <CardTitle.Sub> Mavjud: 125 ta</CardTitle.Sub>
            </CardTitle>
          </Card>
          <Card>
            <Icon type={"third"}>
              <Icon.Third />
            </Icon>
            <CardTitle>
              <CardTitle.Title>
                Loyiha holati bo'yicha ma'lumotlar
              </CardTitle.Title>
              <CardTitle.Sub> Mavjud: 125 ta</CardTitle.Sub>
            </CardTitle>
          </Card>
        </CardWrapper>
      </Main>
    </Container>
  );
};

export default Asosiy;
