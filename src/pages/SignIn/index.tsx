import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content, Background } from "./styles";
const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Login</h1>

        <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />

        <Input name="senha" type="Senha" placeholder="Senha" icon={FiLock} />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="register">Criar Conta</a>
    </Content>
    <Background>
      <h1>Que bom que você está aqui</h1>
      <h2>Faça seu login para aproveitar todas as novidades da plataforma</h2>
    </Background>
  </Container>
);

export default SignIn;
