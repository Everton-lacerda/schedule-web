import { Form } from "@unform/web";
import React from "react";
import { FiMail, FiLock } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content, Background } from "./styles";
const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />

          <Input
            name="senha"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="register">Criar Conta</a>
      </Content>
      <Background>
        <h1>Que bom que você está aqui</h1>
        <h2>Faça seu login para aproveitar todas as novidades da plataforma</h2>
      </Background>
    </Container>
  );
};
export default SignIn;
