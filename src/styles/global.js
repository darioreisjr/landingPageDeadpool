import { createGlobalStyle } from "styled-components";

import imagemFundo from "../img/Home.png"
import RogueHeroExpanded from "../fonts/Roguee.ttf"

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        text-decoration: none;
        color: #FFFFFF;
        list-style: none;
    }

    @font-face {
        font-family: RogueHeroExpanded;
        src: local(RogueHeroExpanded), url(${RogueHeroExpanded}) format('truetype');
    }

    body {
        background-image: url(${imagemFundo}) ;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100vh;
        height: 100vh;
    }

`