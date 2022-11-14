import styled from "styled-components";

const Container = styled.div`
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : "56px")};
  background-color: ${({ bg }) => (bg ? bg : `#1D2343`)};
  box-shadow: 0px 15px 30px rgba(65, 45, 182, 0.21);
  border-radius: 5px;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  :active {
    opacity: 0.8;
    transform: scale(0.99);
  }
`;
export { Container };
