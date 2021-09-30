import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 16px "Poppins", Arial, sans-serif;
  color: #FBFBFB;
  background: #1F2229;
}

input, textarea {
  font-family: "Poppins";
}

button {
  cursor: pointer;
}`;
