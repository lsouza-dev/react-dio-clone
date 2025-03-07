import styled from "styled-components";

export const Container = styled.div`
    max-width:80%;
    height:47px;

    display:flex;
    justify-content: space-around;
    align-items:center;
    margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 47px;
`;

export const BuscarInputContainer = styled.div`
  width: 175px;
  height: 2rem;
  background: #2d2d37;
  border-radius: 0.5rem;
  padding: 3px .2rem;
  margin: 0 12px;

  display:flex;
`;

export const Menu = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #FFFF;
  margin-right: 12px;
  text-decoration: none;
`;

export const MenuRight = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: .8rem;
  line-height: 1.5rem;
  color: #FFFF;
  margin-right: 12px;
  text-decoration: none;
`;


export const UserPicture = styled.img`
  width:32px;
  height:32px;
  border-radius:1.2rem;
  border: 2px solid #FFFFFF;
`

export const Input = styled.input`
  background:transparent;
  flex:1;
  border:0;
  border-radius:.5rem;
  color:#FFFFFF;
`