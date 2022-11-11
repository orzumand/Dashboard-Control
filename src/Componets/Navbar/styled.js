import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  width: 100%;
  min-width: 280px;
  max-width: 320px;
  background: #1d2343;
  display: flex;
  flex-direction: column;
  padding: 27px 18px;
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #97a4c5;
  }
  .active {
    color: #ffffff;
  }
`;

export { Container, Wrapper };
