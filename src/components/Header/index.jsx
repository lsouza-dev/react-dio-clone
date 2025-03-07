import React from "react";
import logo from "../../assets/logo-dio.png";
import banner from "../../assets/banner.png";

import {
  BuscarInputContainer,
  Column,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";
import Button from "../Button";

const Header = ({ authenticado,onClick }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          {authenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {authenticado ? <UserPicture src="https://avatars.githubusercontent.com/u/137304972?v=4" /> : (<>
            <MenuRight href="">Home</MenuRight>
            <Button title={"Entrar"} />
            <Button title={"Cadastrar"} />
          </>)}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
