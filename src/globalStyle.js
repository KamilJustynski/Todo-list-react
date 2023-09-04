import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        background-image: url(https://wallpapers.com/images/high/best-marble-background-6v2qysqi0lvrsu40.webp);
        opacity: 0.9;
        background-size: cover;
        font-family: "Lato", sans-serif;
        margin: 20px;
    }`;


