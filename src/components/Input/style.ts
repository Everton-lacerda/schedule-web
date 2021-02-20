import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 1px solid #ced4da;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;
  & + div {
    margin-top: 16px;
  }

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
