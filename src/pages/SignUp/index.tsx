import React from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import ButtonWhite from "../../components/ButtonWhite";
import Input from "../../components/Input";
import { Container, Content, Background } from "./styles";
import { Form } from "@unform/web";

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background>
        <h1>Não perca tempo</h1>
        <h2>Criar uma conta para ter acesso a plataforma</h2>
      </Background>

      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Cadastro</h1>

          <Input name="name" type="text" placeholder="Nome" icon={FiUser} />

          <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />

          <Input
            name="senha"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <ButtonWhite type="submit">Cadastrar</ButtonWhite>
        </Form>

        <a href="register">Fazer Login</a>
      </Content>
    </Container>
  );
};

export default SignUp;
