import styled from "styled-components";
import { ReactComponent as FirstCard } from "../../Assets/Icon/bank.svg";
import { ReactComponent as SecondCard } from "../../Assets/Icon/document-text.svg";
import { ReactComponent as ThirdCard } from "../../Assets/Icon/document-filter.svg";

const getType = ({ type }) => {
  switch (type) {
    case "first":
      return {
        background: " #0061FF",
      };
    case "second":
      return {
        background: "#FF9901",
      };
    case "third":
      return {
        background: "#8F01FF",
      };
    default:
      return { background: "#00E109" };
  }
};

const Container = styled.div`
  width: 100%;
  padding: 20px 14px;
`;
const Main = styled.div`
  padding: 30px 15px;
`;
const CardWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 24px;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 10px;

  background: #f4f8fa;
  border-radius: 10px;
  gap: 10px;
`;

const Icon = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${getType}
`;
Icon.First = styled(FirstCard)`
  width: 44px;
`;
Icon.Second = styled(SecondCard)`
  width: 44px;
`;
Icon.Third = styled(ThirdCard)`
  width: 44px;
`;

const CardTitle = styled.div`
  display: flex;
  height: 100%;
  justify-content: end;
  gap: 8px;
  flex-direction: column;
`;
CardTitle.Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
`;
CardTitle.Sub = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  /* identical to box height, or 171% */

  color: #80919a;
`;

export { Container, Main, CardWrapper, Card, CardTitle, Icon };
