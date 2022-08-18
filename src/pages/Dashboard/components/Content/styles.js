import styled from "styled-components";

export const Loading        = styled.h1`
font-size: 32px;
color: var(--pink);
`
export const DivNavegation  = styled.div`
width: 95%;
height: 68px;
font-family: 'Inter';
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid var(--grey-3);
padding: 20px;
    h1 {
        color: var(--pink);
    }
    button {
        background: var(--grey-3);
        color: var(--grey-0);
        font-size: 12px;
        padding: 0px 10px;
        border-radius: 4px;
        width: 50px;
        border: 1px solid var(--grey-3);
        height: 30px;
        &:hover {
            background: var(--grey-2);
        }
    }
`
export const DivHeader      = styled.div`
font-family: 'Inter';
display: flex;
flex-direction: column;
width: 100%;
height: 68px;
background: #121214;
margin-bottom: 20px;
border-bottom: 1px solid var(--grey-3) ;
padding: 20px;
gap: 10px;
    h2 {
        color: var(--grey-0);
        font-size: 18px;
    }
    p {
        color: var(--grey-1);
        font-size: 12px;
    }
`
export const Container      = styled.div`
width: 90%;
display: flex;
flex-direction: column;
font-family: 'Inter';
padding: 20px;
gap: 20px;
    .divNav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .divNav h2 {
        font-size: 16px;
    }
    .divNav button {
        border-radius: 4px;
        background: var(--grey-3);
        color: white;
        border: 1px solid var(--grey-3);
        padding: 5px 8px;
        font-size: 16px;
    }
`
export const DivContent     = styled.div`
background: var(--grey-3);
border-radius: 4px;
    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
    }
    li {
        display: flex;
        align-items: center;
        background: var(--grey-4);
        border-radius: 4px;
        justify-content: space-between;
    }
`
export const ButtonModal    = styled.button`
    display: flex;
    width: 100%;
    height: 100%;
    background: var(--grey-4);
    border: 0px;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border-radius: 4px;
    &:hover {
        background: var(--grey-1);
        color: var(--grey-0);
    }
        h3 {
            color: var(--grey-0);
            font-size: 14px;
        }
        span {
            color: var(--grey-1);
        }
`