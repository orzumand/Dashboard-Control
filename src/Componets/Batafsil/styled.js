import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px 14px;
`;
const Main = styled.div`
  padding: 30px 15px;
`;
const Table = styled.table`
  margin-top: 16px;
  text-align: center;
  width: 100%;
  font-size: 14px;
  border-spacing: 0px;
  td:first-child {
    width: 60px;
  }
  tr:first-child {
    background-color: #dfe2ef;
  }
  td,
  th {
    height: 50px;
    border: 1px solid #dfe2ef;
  }
`;
export { Container, Main, Table };
