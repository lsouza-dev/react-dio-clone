import React from "react";
import Header from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from "./styles";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
const Feed = () => {
  return (
    <>
      <Header authenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={95}
            nome={"Luiz Fabiano de Souza"}
            image={"https://avatars.githubusercontent.com/u/137304972?v=4"}
          />
          <UserInfo
            percentual={75}
            nome={"Luiz Fabiano de Souza"}
            image={"https://avatars.githubusercontent.com/u/137304972?v=4"}
          />
          <UserInfo
            percentual={45}
            nome={"Luiz Fabiano de Souza"}
            image={"https://avatars.githubusercontent.com/u/137304972?v=4"}
          />
          <UserInfo
            percentual={15}
            nome={"Luiz Fabiano de Souza"}
            image={"https://avatars.githubusercontent.com/u/137304972?v=4"}
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
