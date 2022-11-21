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
  width: 100%;
  font-size: 14px;
  border-spacing: 0px;

  tr:nth-child(even) {
    background-color: #f7f9fd;
  }
  td:first-child {
    font-weight: 600;
  }
  td {
    width: 50%;
    height: 50px;
    border: 1px solid #dfe2ef;
    padding: 0px 20px;
  }
`;
export { Container, Main, Table };
