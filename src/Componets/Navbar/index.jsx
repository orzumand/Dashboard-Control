import React from "react";
import { Input, Select, Searchbtn, User, SelectUser } from "./styled";
import { Container } from "./styled";
import { Button } from "../Generic";

const Navbar = () => {
  return (
    <Container>
      <div className="input">
        <Input>
          <Input.Search />
          <Input.Input placeholder="Kalit so'zni kiriting" />
          <div className="cut"></div>
          <Select
            id="cars"
            name="carlist"
            form="carform"
            placeholder="Hujjat turi bo'yicha"
          >
            <option value="volvo">Hujjat turi bo'yicha</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </Select>
        </Input>
        <Button bg={"#0061FF"} height={50} width={130}>
          <Searchbtn />
          Izlash
        </Button>
      </div>
      <div className="user">
        <Select
          id="cars"
          name="carlist"
          form="carform"
          placeholder="Hujjat turi bo'yicha"
          border={"1px solid #aeacc6"}
        >
          <option value="volvo">O'zbek tili</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </Select>
        <SelectUser>
          <User />
          <Select
            id="cars"
            name="carlist"
            form="carform"
            placeholder="Hujjat turi bo'yicha"
          >
            <option value="volvo">Yo'ldashev Hayotbek</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </Select>
        </SelectUser>
      </div>
    </Container>
  );
};

export default Navbar;
