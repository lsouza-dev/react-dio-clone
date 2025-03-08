import { MdEmail, MdLock } from "react-icons/md";
import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {api} from '../../services/api'
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  TextContent,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
const Login = () => {


  const schema = yup
    .object({
      email: yup.string().email("Email inválido").required('Campo obrigatório'),
      password: yup
        .string()
        .min(5, "A senha deve ter no mínimo 5 caracteres.")
        .required('Campo obrigatório'),
    })
    .required();



  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (formData) =>{
    try{
      const {data} = await api.get(`/users?email=${formData.email}&password= ${formData.password}`)
      if(data.length === 1) navigate('/feed');
      else alert('Email ou senha incorretos.') 
  
    }catch(erro){
      alert('Houve um erro, tente novamente.\n' + erro)
    }
  }
  

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate("/" + path);
  };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rapido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                errorMessage={errors.email?.message}
                name={"email"}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                errorMessage={errors.password?.message}
                name={"password"}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button type="submit" title={"Enter"} variant="secondary" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
