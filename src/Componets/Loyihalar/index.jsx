import React, { useEffect, useState } from "react";
import { Container, Main, Table } from "./styled";
import Navbar from "../Navbar";
// import { list } from "../../Mock/data";

const Loyihalar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <Container>
      <Navbar />
      <Main>
        <div className="mainTitle">Loyihalar</div>
        <Table>
          <tbody>
            <tr>
              <th>№</th>
              <th>Logotip</th>
              <th>Loyiha nomi</th>
              <th>Loyiha Id raqami</th>
              <th>Ishlab chiqarish asosi</th>
              <th>Ishlab chiqarish muddati</th>
              <th>Loyiha haqida to'liq</th>
            </tr>
            {data?.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value?.username}</td>
                  <td>{value?.name}</td>
                  <td>{value?.address?.suite}</td>
                  <td>{value?.address.street}</td>
                  <td>{value?.address.zipcode}</td>
                  <td>
                    <a href="/">batafsil..</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Main>
    </Container>
  );
};

export default Loyihalar;
