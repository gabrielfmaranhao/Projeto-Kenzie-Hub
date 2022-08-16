import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root{
        --nightBackground: #000000;
        --grey-0:  #F8F9FA ;
        --grey-1:  #868E96 ;
        --grey-2:  #343B41 ;
        --grey-3:  #212529 ;
        --grey-4:  #121214 ;
        --pink:    #FF577F ;

    }
    html,body, #root{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4 ,h5 ,h6 , p  {
        margin:0px
    }
    body {
        background-color: var(--nightBackground);
    }
    h1, h2,li {
        color: white;
    }
    button {
        cursor: pointer;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

`