import React from "react";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";
import { PiThumbsUp } from "react-icons/pi";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://media.licdn.com/dms/image/v2/D4E16AQHHkkgwoegFdw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1721406529838?e=1746662400&v=beta&t=nNMcruJyegzVZbDEQwR4CZbhreK9S_3cRNKZtFYIFXg" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/137304972?v=4"/>
          <div>
            <h4>Luiz Fabiano</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso e HTML e CSS</h4>
          <p>Projeto feito no curso de html e css no bottcamp dio do Global avanade... <strong>saiba mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <PiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>

  )
};

export default Card;
