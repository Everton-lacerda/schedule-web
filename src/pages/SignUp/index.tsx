import React from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import ButtonWhite from "../../components/ButtonWhite";
import Input from "../../components/Input";
import { Container, Content, Background } from "./styles";
const SignUp: React.FC = () => (
  <Container>
    <Background>
      <h1>Não perca tempo</h1>
      <h2>Criar uma conta para ter acesso a plataforma</h2>
    </Background>

    <Content>
      <form>
        <h1>Cadastro</h1>

        <Input name="name" type="text" placeholder="Nome" icon={FiUser} />

        <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />

        <Input name="senha" type="Senha" placeholder="Senha" icon={FiLock} />

        <ButtonWhite type="submit">Cadastrar</ButtonWhite>
      </form>

      <a href="register">Fazer Login</a>
    </Content>
  </Container>
);

export default SignUp;
