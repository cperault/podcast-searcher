/*************************************************************************************************************
 File:         Podcasts.js
 Author:       Christopher Perault
 Project:      podcast-player
 Date:         April 6th, 2021
 Description:  Parent component that will fetch podcasts, store them, and send them to a child component
               to be rendered.
 *************************************************************************************************************/

import React from "react";
import PodcastList from "../Podcast/PodcastList.js";

const Podcasts = () => {
  const podcasts = [
    {
      name: "Podcast #1",
      url: "https://podcastnumberone.xyz",
    },
    {
      name: "Podcast #2",
      url: "https://podcastnumbertwo.xyz",
    },
    {
      name: "Podcast #3",
      url: "https://podcastnumberthree.xyz",
    },
    {
      name: "Podcast #4",
      url: "https://podcastnumberfour.xyz",
    },
  ];

  return (
    <div className="podcasts_container">
      <PodcastList podcasts={podcasts} />
    </div>
  );
};

export default Podcasts;
