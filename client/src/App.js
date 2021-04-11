/*************************************************************************************************************
 File:         App.js
 Author:       Christopher Perault
 Project:      podcast-player
 Date:         April 6th, 2021
 Description:  Main component to store the routing and subcomponents that make up this app; this will get sent
               to the `index.js` file where our app is then loaded into the `root` ID of the `index.html` file.
 *************************************************************************************************************/

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./CSS/styling.css";
import Search from "./Components/Search/Search.js";
import Podcast from "./Components/Podcast/Podcast.js";

const App = () => {
  const [searchData, setSearchData] = useState([]);
  const [wrapperHeader, setWrapperHeader] = useState("Podcast Searcher");
  return (
    <Router>
      <div className="wrapper_container">
        <h1 className="wrapper_header">{wrapperHeader}</h1>
        <Switch>
          <Route exact path={["/", "/home"]}>
            {searchData.length > 0 ? (
              <Podcast podcasts={searchData} />
            ) : (
              <Search
                setSearchData={setSearchData}
                setWrapperHeader={setWrapperHeader}
              />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
