/*************************************************************************************************************
 File:         App.js
 Author:       Christopher Perault
 Project:      podcast-player
 Date:         April 6th, 2021
 Description:  Main component to store the routing and subcomponents that make up this app; this will get sent
               to the `index.js` file where our app is then loaded into the `root` ID of the `index.html` file.
 *************************************************************************************************************/

import React from "react";
import "./CSS/styling.css";
import Podcasts from "./Components/Podcast/Podcasts.js";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper_container">
        <h1 className="wrapper_header">Podcast Player</h1>
        <Podcasts />
      </div>
    </div>
  );
};

export default App;
