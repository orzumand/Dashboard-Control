import React from "react";
import { Container, Main, Table } from "./styled";
import Navbar from "../Navbar";
import { list } from "../../Mock/data";

const Batafsil = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <div className="mainTitle">Loyihalar</div>
        <Table>
          <tbody>
            <tr>
              <td>Asos</td>
              <td>{list[0].asos}</td>
            </tr>
            <tr>
              <td>Logotip</td>
              <td>{list[0].logotip}</td>
            </tr>
            <tr>
              <td>Loyiha nomi</td>
              <td>{list[0].loyihaNomi}</td>
            </tr>
            <tr>
              <td>Muddat</td>
              <td>{list[0].muddat}</td>
            </tr>
            <tr>
              <td>Kim tomonidan</td>
              <td>{list[0].user}</td>
            </tr>
            <tr>
              <td>Asos</td>
              <td>{list[0].asos}</td>
            </tr>
            <tr>
              <td>Logotip</td>
              <td>{list[0].logotip}</td>
            </tr>
            <tr>
              <td>Loyiha nomi</td>
              <td>{list[0].loyihaNomi}</td>
            </tr>
            <tr>
              <td>Muddat</td>
              <td>{list[0].muddat}</td>
            </tr>
            <tr>
              <td>Kim tomonidan</td>
              <td>{list[0].user}</td>
            </tr>
            <tr>
              <td>Asos</td>
              <td>{list[0].asos}</td>
            </tr>
            <tr>
              <td>Logotip</td>
              <td>{list[0].logotip}</td>
            </tr>
            <tr>
              <td>Loyiha nomi</td>
              <td>{list[0].loyihaNomi}</td>
            </tr>
            <tr>
              <td>Muddat</td>
              <td>{list[0].muddat}</td>
            </tr>
            <tr>
              <td>Kim tomonidan</td>
              <td>{list[0].user}</td>
            </tr>
          </tbody>
        </Table>
      </Main>
    </Container>
  );
};

export default Batafsil;
