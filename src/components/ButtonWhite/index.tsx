import React, { ButtonHTMLAttributes } from "react";
import { ContainerButton } from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonWhite: React.FC<ButtonProps> = ({children, ... rest}) => ( 
    <ContainerButton type="button" {... rest}>{children}</ContainerButton> 
);

export default ButtonWhite;
