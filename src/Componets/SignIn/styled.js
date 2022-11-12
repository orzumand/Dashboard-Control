import styled from "styled-components";
import img from "../../Assets/Icon/backgrounf.png";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const Left = styled.div`
  flex: 1;
  background-image: url(${img});
  background-size: cover;
`;
const Right = styled.div`
  flex: 1;
  background-color: #ffffff;
`;
const Img = styled.img`
  height: 100vh;
  width: 100%;
`;
export { Container, Left, Right, Img };
