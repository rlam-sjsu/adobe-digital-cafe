import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { HashRouter } from "react-router-dom"
//<!-- Include global variables first -->
import "./assets/css/@spectrum-css/vars/dist/spectrum-global.css";

//<!-- Include only the scales your application needs -->
import "./assets/css/@spectrum-css/vars/dist/spectrum-medium.css";
import "./assets/css/@spectrum-css/vars/dist/spectrum-large.css";

//<!-- Include only the colorstops your application needs -->
import "./assets/css/@spectrum-css/vars/dist/spectrum-light.css";
import "./assets/css/@spectrum-css/vars/dist/spectrum-dark.css";
import "./assets/css/@spectrum-css/vars/dist/spectrum-darkest.css";

//<!-- Include tokens -->
import "./assets/css/@spectrum-css/tokens/dist/index.css";

//<!-- Include index-vars.css for all components you need -->
import "./assets/css/@spectrum-css/page/dist/index-vars.css";
import "./assets/css/@spectrum-css/typography/dist/index-vars.css";
import "./assets/css/@spectrum-css/icon/dist/index-vars.css";
import "./assets/css/@spectrum-css/button/dist/index-vars.css";
import "./assets/css/@spectrum-css/card/dist/index-vars.css";

//<!-- Adobe React Spectrum -->
import { defaultTheme, Provider } from '@adobe/react-spectrum';

//<!-- Adobe Digital Cafe customized styling -->
import "./assets/css/index.css";

// <!--Spectrum Web Components-->
import "@spectrum-web-components/theme/theme-light.js";
import '@spectrum-web-components/theme/express/theme-light.js';
import "@spectrum-web-components/theme/scale-medium.js";
import '@spectrum-web-components/theme/express/scale-medium.js';
import { Theme } from "@swc-react/theme";


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <HashRouter>
          <App />
    </HashRouter>
  </React.StrictMode>
)