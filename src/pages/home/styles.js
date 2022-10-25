import styled, { css } from "styled-components";

import btnRed from "../../img/btnRed.png"
import btnTransparente from "../../img/btnTranparente.png"

export const Container = styled.main`
    display: flex;
    flex: 1;
    width: 100vw;
    align-items: center;
`

export const ConteudoBox = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`

export const Titulo = styled.h1`
    font-family: RogueHeroExpanded, serif;
    color: #BB222F;
    font-size: 80px;
`
export const Paragrafo = styled.p`
    color: #BEBEBE;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 12px;
    text-align: justify;
    width: 84%;
    padding: 15px;
`

export const ContainerBotao = styled.div`
    width: 84%;
   
`

export const Botao = styled.button`
    background-color: transparent;
    background-image: url(${btnRed});
    background-size: cover;
    border: none;
    width: 225px;
    height: 45px;

    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-size: 16;
    font-weight: 400;

    &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

    ${({ variant }) => variant !== 'primary' && css`
    background-color: transparent;
    background-image: url(${btnTransparente});

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }
       
    
    `}
`



export const ImagemBox = styled.section`
    display: flex;
    width: 50%;
    align-items: flex-end;
    justify-content: end;
`

export const Imagem = styled.img`
    background-size: contain;

`

export const ContainerRedeSociais = styled.section`
    width: 84%;
    margin-top: 70px;
`

export const BoxIcon = styled.div`
    display: flex ;
    justify-content: center;
    align-items: center;
    gap: 60px;
`

export const Icon = styled.img`
    width: 40px;
    &:hover{
        width: 50px;


        }
`
