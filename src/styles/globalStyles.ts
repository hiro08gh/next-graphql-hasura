import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    background-repeat: no-repeat;
  }
  html,
  body {
    background-color: #FFF;
    color: #3333;
    font-kerning: normal;
    font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif;
    line-height: 1.5;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    width: 100%;
    text-size-adjust: 100%;
  }
  a {
    color: #333;
    text-decoration: none;
    cursor: pointer;
  }
  li {
    list-style: none 
  };
  ul {
    padding: 0;
  }
`;
