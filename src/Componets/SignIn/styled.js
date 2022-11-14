import styled from "styled-components";
import img from "../../Assets/Icon/backgrounf.png";
import { ReactComponent as User } from "../../Assets/Icon/user.svg";
import { ReactComponent as Lock } from "../../Assets/Icon/lock.svg";
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
  justify-content: center;
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

const Form = styled.div`
  padding: 0px 100px;
  width: 100%;
`;

const Input = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e4ed;
  border-radius: 5px;
  display: flex;
  margin-bottom: 26px;
  padding-right: 2px;
  :focus-within {
    border: 1px solid #00d9ff;
  }
`;
Input.Input = styled.input`
  width: 100%;
  border: none;
  height: 50px;
  font-weight: 400;
  font-size: 16px;
  color: #aeacc6;

  :focus {
    outline: none;
    color: black;
  }
`;
Input.User = styled(User)`
  margin: 12px;
  width: 24px;
  height: 24px;
`;
Input.Lock = styled(Lock)`
  margin: 12px;
  width: 24px;
  height: 24px;
`;
const TopTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 2px;
`;
const Other = styled.div`
  display: flex;
  gap: 16px;
  margin: 26px 0px;
`;
const OtherTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-top: 34px;

  color: #a3a2b0;
`;
OtherTitle.Line = styled.div`
  max-width: 170px;
  width: 100%;
  border-bottom: 1px solid #a3a2b0;
`;
const ForgotTitle = styled.a`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-top: -12px;
  margin-bottom: 18px;
  color: #a3a2b0;
`;
export {
  Container,
  Left,
  Right,
  Logo,
  Title,
  Form,
  TopTitle,
  Input,
  Other,
  OtherTitle,
  ForgotTitle,
};
