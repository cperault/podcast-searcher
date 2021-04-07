/*************************************************************************************************************
 File:         index.js
 Author:       Christopher Perault
 Project:      podcast-player
 Date:         April 6th, 2021
 Description:  Top level file that loads everything from `App.js` into the `root` ID of the `index.html` file.
 *************************************************************************************************************/

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
