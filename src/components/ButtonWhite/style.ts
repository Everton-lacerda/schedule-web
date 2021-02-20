import styled from "styled-components";

import { shade } from "polished";


export const ContainerButton = styled.button`
  background: #fff;
  height: 56px;
  color: #16384e;
  font-weight: 500;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#fff")};
  }
`;
