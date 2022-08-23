import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 35px;
font-family: 'Inter';
margin-top: 20px;
`
export const DivNav = styled.div`
display: flex;
flex-direction: row;
width: 300px;
height: 38px;
justify-content: space-between;
    h2 {
        color: var(--pink);
    }
    button {
        background: var(--grey-3);
        color: var(--grey-0);
        font-size: 9px;
        padding: 0px 17px;
        border-radius: 4px;
        width: 80px;
        border: 1px solid var(--grey-3);
        &:hover {
            background: var(--grey-2);
        }
    }
`
export const DivContainer = styled.div`
background: var(--grey-3);
width: 260px;
display: flex;
flex-direction: column;
box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
border-radius: 3.19812px;
padding: 20px;
gap: 18px;
`
export const DivInfomation = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
    h3 {
        color: var(--grey-0);
        font-size: 15px;
    }
    p {
        color: var(--grey-1);
        font-size: 9px;
    }
`
export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
    label {
        color: var(--grey-0);
        font-size: 14px;
    }
    span {
        display: block;
        color: var(--pink);
        font-size: 12px;
    }
    input {
        background: var(--grey-2);
        border: 1px solid var(--grey-2);
        border-radius: 4px;
        padding: 0px 13px;
        height: 38px;
        color: #868E96;
        font-size: 12px;
    }
    select {
        background: var(--grey-2);
        border: 1px solid var(--grey-2);
        border-radius: 4px;
        padding: 0px 13px;
        height: 38px;
        color: #868E96;
        font-size: 12px;
    }
    button {
        background: #59323F;
        box-sizing: border-box;
        border: 1.2182px solid #59323F;
        border-radius: 4px;
        height: 38px;
        margin-top: 15px;
        color: white;
        font-size: 12px;
        &:hover {
            background: var(--pink);
        }
    }

`