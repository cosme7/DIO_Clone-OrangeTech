import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*::before,
*::after{
    box-sizing: border-box;
}

:root{
    /* Font-Weight */
    --fw-400: 400;
    --fw-700: 700;
    /* Font-Family */
    --ff-primary: 'Open Sans', sans-serif;
    /* Cor da Letra */
    --clr-pk: #E4105D;
    --clr-wt: #FFFFFF;
    --clr-yw: #E5E044;
    --clr-gr: #23DD7A;
    /* Cor Background */
    --bg-dark: #151515;
    --bg-accent: #E4105D;
    --bg-light: #1e192c;
    --bg-gr: #565656;
    --bg-gr-light:#3B4651;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list']{
    list-style: none;
}

 /* Set core root defaults */
html:focus-within{
    scroll-behavior: smooth;
}

 /* Set core body defaults */
body{
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]){
    text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture{
    max-width: 100%;
    display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
    font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce){
    html:focus-within {
        scroll-behavior: auto;
    }
        
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
`;
