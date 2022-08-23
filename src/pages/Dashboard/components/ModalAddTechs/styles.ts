import styled from "styled-components";

export const Container = styled.div`
width: 300px;
display: flex;
flex-direction: column;
font-family: 'Inter';
align-items: center;
box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    .DivFecharModal {
        display: flex;
        justify-content: space-between;
        background: var(--grey-2);
        width: 100%;
        align-items: center;
        padding: 10px;
        border-radius: 4px 4px 0px 0px;
    }
    .DivFecharModal h3 {
        color: var(--grey-0);
        font-size: 12px;
        margin-left: 10px
    }
    .DivFecharModal button {
        color: var(--grey-1);
        background: var(--grey-2);
        border: none;
        margin-right: 10px;
    }
`
export const DivForm   = styled.div`
padding:10px;
background: var(--grey-3);
width: 100%;

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
    form label {
        font-size: 10px;
        color:var(--grey-0);
    }
    form input, select {
        height: 38px;
        display: flex;
        align-items: center;
        border: 0.9772px solid #F8F9FA;
        border-radius: 3.20867px;
        background: var(--grey-2);
        padding-left: 10px;
        color: var(--grey-0);
        font-size: 13px;
    }
    form button {
        height: 38px;
        display: flex;
        align-items: center;
        border: none;
        border-radius: 3.20867px;
        justify-content: center;
        background: #59323F;
        color: var(--grey-0);
        margin-top: 20px;
        &:hover {
            background: var(--pink);
        }
    }
    form span {
        font-size: 14px;
        color: red;
    }
    
`