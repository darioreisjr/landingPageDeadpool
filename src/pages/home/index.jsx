import React from "react";

import ImagemDeadpool from "../../img/deadpool img.png";

import FacebookIcon from "../../img/facebookIcon.png"
import InstagramIcon from "../../img/instagram.png"
import YoutubeIcon from "../../img/youtube.png"
import TwitterIcon from "../../img/twitter.png"

import Header from "../../components/header";

import {
  Container,
  ConteudoBox,
  ImagemBox,
  Imagem,
  Titulo,
  Paragrafo,
  ContainerBotao,
  Botao,
  BoxIcon,
  ContainerRedeSociais,
  Icon
} from "./styles";

export default function Home({ variant = "primary" }) {
  return (
    <>
      <Header />
      <Container>
        <ConteudoBox>
          <Titulo>DEADPOOL</Titulo>
          <Paragrafo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            suscipit dolores. Voluptas, tempore? Illo natus cumque, iusto
            tenetur provident adipisci dolores magnam officia ipsam quae
            praesentium quaerat atque voluptas. Blanditiis.iusto tenetur
            provident adipisci dolores magnam officia ipsam quae praesentium
            quaerat atque voluptas. Blanditiis.
          </Paragrafo>
          <ContainerBotao>
            <Botao variant={variant}>Comprar Ingresso</Botao>
            <Botao>Assista o Trailer</Botao>
          </ContainerBotao>

          <ContainerRedeSociais>
            <BoxIcon>
              <Icon src={FacebookIcon} />
              <Icon src={InstagramIcon} />
              <Icon src={YoutubeIcon} />
              <Icon src={TwitterIcon} />
            </BoxIcon>
          </ContainerRedeSociais>
        </ConteudoBox>

        <ImagemBox>
          <Imagem src={ImagemDeadpool} />
        </ImagemBox>
      </Container>
    </>
  );
}
