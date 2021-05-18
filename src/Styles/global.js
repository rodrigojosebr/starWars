import { createGlobalStyle } from 'styled-components';
import starBackground from '../Images/starBackground.png';
import deathStarBackground from '../Images/deathStarBackground.jpg';
import lightDeathStarBackground from '../Images/lightDeathStarBackground.png';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
   }
   html, body, #root {
      min-height: 100%;
   }
   body {
    /* background-image: url(${starBackground}); */
    background-image: url(${deathStarBackground});
    /* background-image: url(${lightDeathStarBackground}); */
    -webkit-font-smoothing: antialiased !important;
   }
   body, input, button {
      color: #222;
      font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;
   }
   button {
      cursor: pointer;
   }
`;