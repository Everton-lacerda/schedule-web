import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #ced4da;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;
  & + div {
    margin-top: 16px;
  }

  ${(props) =>
    props.isFocused &&
    css`{
    color: #848679;
    border-color:  #848679;
  `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
  }
  svg {
    color: #848679;

    margin-right: 16px;
  }
`;
