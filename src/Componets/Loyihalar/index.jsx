import React from "react";
import { Container, Main, Table } from "./styled";
import Navbar from "../Navbar";
import { list } from "../../Mock/data";
const Loyihalar = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <div className="mainTitle">Loyihalar</div>
        <Table>
          <tr>
            <th>№</th>
            <th>Logotip</th>
            <th>Loyiha nomi</th>
            <th>Loyiha Id raqami</th>
            <th>Ishlab chiqarish asosi</th>
            <th>Ishlab chiqarish muddati</th>
            <th>Loyiha haqida to'liq</th>
          </tr>
          {list.map(({ loyihaNomi, muddat, asos, logotip, id }, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{logotip}</td>
                <td>{loyihaNomi}</td>
                <td>777</td>
                <td>{asos}</td>
                <td>{muddat}</td>
                <td>
                  <a href="/">batafsil..</a>
                </td>
              </tr>
            );
          })}
        </Table>
      </Main>
    </Container>
  );
};

export default Loyihalar;
