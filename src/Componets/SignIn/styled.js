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
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
Logo.Img = styled.img`
  width: ${({ width }) => (width ? `${width}px` : "150px")};
`;
Logo.Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "30px")};

  text-transform: uppercase;

  color: ${({ color }) => (color ? color : "#ffffff")};
`;
Logo.Title.Subtitle = styled.div`
  font-weight: 500;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "20px")};
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 23px;
  line-height: 50px;
  text-align: center;
`;
Title.Subs = styled.div`
  font-weight: 300;
  font-size: 13px;
`;
export { Container, Left, Right, Logo, Title };
