import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  
 }
html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
    
}

body::-webkit-scrollbar {
  width: 24px;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}


h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 96px;
  font-weight: 900;
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 70.4px;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }

  h3 {
  font-size: 28.8px;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 16px;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 20px;
}

.grid {
  display: grid;
  gap: 144px;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

  .common-heading {
      font-size: 60.8px;
      font-weight: 600;
      margin-bottom: 96px;
      text-transform: capitalize;
    }

    input, textarea{
    max-width: 800px;
    color: ${({ theme }) => theme.colors.black};
    padding: 25.6px 38.4px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 256px;
    margin-top: 32px;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 22.4px 35.2px;
    border-style: solid;
    border-width: 1.6px;
    text-transform: uppercase;
    font-size: 28.8px;
    cursor: pointer;
    }


/* ===========================================
/* media queries  
======================================= */


//998px
@media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 51.2px;
      }

        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {

      html{
        font-size: 50%;
      }

      .grid{
        gap: 51.2px;
      }

      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}


`;
