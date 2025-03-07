import React from "react";
import {useNavigate} from 'react-router-dom'
import Header from "../../components/Header";
import banner from "../../assets/banner.png";
import { Container, TextContent, Title, TitleHighlight } from "./styles";
import Button from "../../components/Button";
const Home = () => {

  const navigate = useNavigate();

  const handleNavigate = (path) =>{
    navigate('/' + path);
  }
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>Implemente</TitleHighlight>
            <br />o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title={'Começar agora'} variant="secondary" onClick={() => handleNavigate('login')} />
        </div>
        <div>
          <img src={banner} alt="imagem principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;
