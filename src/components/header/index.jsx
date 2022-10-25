import React from "react";
import { Container, Menu, ItemMenu } from "./styles";

export default function Header() {
  return (
    <Container>
      <Menu>
        <ItemMenu>Inicio</ItemMenu>
        <ItemMenu>Historia</ItemMenu>
        <ItemMenu>Wallpapers</ItemMenu>
        <ItemMenu>Mais +</ItemMenu>
      </Menu>
    </Container>
  );
}
