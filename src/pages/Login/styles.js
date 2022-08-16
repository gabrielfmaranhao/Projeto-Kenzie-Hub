import styled from "styled-components";

export const Container = styled.div` 
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    h1 {
        color:var(--pink);
        font-family: 'Inter';
    }
`
export const DivForm = styled.div`
        display: flex;
        flex-direction: column;
        background: var(--grey-3);
        box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
        border-radius: 3.2px;
        padding: 33px 20px;
        font-family: 'Inter';
        gap: 10px;
        width: 260px;
        
    h2 {
        color: var(--grey-0);
        text-align: center;
        font-size: 15px;
    }
`
export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
    label {
        color: var(--grey-0);
        font-size: 12px;
    }
    span {
        color: var(--pink);
        font-size: 10px;
    }
    input {
        color: var(--grey-0);
        background: var(--grey-2);
        border: 1.2px solid var(--grey-0);
        border-radius: 4px;
        padding: 0px 20px;
        height: 38px;
    }
    button {
        background:  #59323F;
        width: 100%;
        height: 38px;
        color: white;
        padding: 0px 22px;
        border-radius: 4px;
        border: 1.2182px solid  #59323F;
        margin-top: 10px;
        &:hover {
            background: var(--pink);
        }
    }

` 
export const DivSpan = styled.div`
display: flex;
flex-direction: column;
width: 260px;
height: 76px;
margin-top: 30px;
gap: 20px;
    span {
        display: block;
        width: 100%;
        color: var(--grey-1);
        font-size: 10px;
        text-align: center;
    }
    button {
        font-size: 12px;
        color: var(--grey-0);
        padding: 0px 22px;
        border: 1.2px solid var(--grey-1);
        border-radius: 4px;
        background: var(--grey-1);
        height: 38px;
        &:hover {
            background: var(--grey-2);
        }
    }
`



