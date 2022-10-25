import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    width: 100vw;
    padding: 50px 0;
`

export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 30px;
`

export const ItemMenu = styled.li`
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    font-size: 14px;
    color: #FFFFFF;

    &:hover{
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            color: #BB222F;

        }
`