import styled from "styled-components";


export const Img = styled.img<{m?: string; width?: string}>`
    width: ${p => p.width || "100px"};
    margin: ${p => p.m || "0"};;
`