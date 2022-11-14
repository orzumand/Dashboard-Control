import styled from "styled-components";
import { ReactComponent as Search } from "../../Assets/Icon/search-normal.svg";
import { ReactComponent as Search1 } from "../../Assets/Icon/search.svg";
import { ReactComponent as UserImg } from "../../Assets/Icon/userimg.svg";
const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  .input {
    display: flex;
  }
  .user {
    display: flex;
    gap: 24px;
  }
`;
const Input = styled.div`
  width: 500px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid #c0cfdd;
  border-radius: 10px;
  margin-bottom: 26px;
  display: flex;
  padding-right: 2px;
  margin-right: 16px;
  :focus-within {
    border: 1px solid #00d9ff;
  }
  .cut {
    height: 30px;

    border-left: 1px solid #c0cfdd;
  }
`;
Input.Input = styled.input`
  width: 80%;
  border: none;

  font-weight: 400;
  font-size: 16px;
  color: #aeacc6;

  :focus {
    outline: none;
    color: black;
  }
`;
Input.Search = styled(Search)`
  margin: 0px 10px;
  width: 26px;
  height: 26px;
`;

const Select = styled.select`
  border: none;
  height: 100%;
  border-radius: 10px;
  border: ${({ border }) => border};
  font-weight: 500;
  :focus {
    outline: none;
    color: black;
  }
`;
const SelectUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #aeacc6;
  border-radius: 10px;
  padding: 0px 10px;
  gap: 10px;
`;
const Searchbtn = styled(Search1)`
  width: 20px;
  margin-right: 5px;
`;
const User = styled(UserImg)`
  /* width: 10px; */
`;
export { Container, Input, Select, Searchbtn, UserImg, User, SelectUser };
