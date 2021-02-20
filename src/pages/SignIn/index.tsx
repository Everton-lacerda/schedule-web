import React from "react";
import { FiLogIn } from 'react-icons/fi'
import { Container, Content, Background } from "./styles";
const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Faça se Login</h1>

        <input type="email" placeholder="E-mail" />

        <input type="Senha" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="register">
          <FiLogIn />
          Criar Conta
          </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
