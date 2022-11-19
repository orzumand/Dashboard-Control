import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "Asosiy":
      return {
        visibility: "hidden",
      };
    case "Loyihalar":
      return {
        background: "#FF8828",
      };
    case "Bajarilganligi":
      return {
        background: " #00E109",
      };
    case "Bajarilmoqda":
      return {
        background: " #2898FF",
      };
    case "Bajarilishi kechikmoqda":
      return {
        background: " #EB5757",
      };
    default:
      return { visibility: "hidden" };
  }
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 320px;
  background: #1d2343;
  display: flex;
  flex-direction: column;
  padding: 27px 18px;
  gap: 12px;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 285px;
    padding: 18px 12px;
    border-radius: 10px;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #97a4c5;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .active {
    color: #ffffff;
    background-color: #262c49;
  }
`;
const LinkCon = styled.div`
  min-width: 285px;
  padding: 18px 12px;
  border-radius: 10px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
`;
Logo.Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Titles = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
`;
const Subtitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #576c9f;
`;

const Icons = styled.img`
  margin-right: 12px;
`;
const Count = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ff8828;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  border-radius: 5px;
  color: #ffffff;
  ${getType}
`;

const Out = styled.div`
  width: 100%;
  padding-left: 320px;
`;
export {
  Container,
  Wrapper,
  Logo,
  Titles,
  Subtitle,
  Icons,
  LinkCon,
  Count,
  Out,
};
