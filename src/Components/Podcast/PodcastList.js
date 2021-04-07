/*************************************************************************************************************
 File:         PodcastList.js
 Author:       Christopher Perault
 Project:      podcast-player
 Date:         April 6th, 2021
 Description:  Child component that will render a list of available podcasts.
 *************************************************************************************************************/

import React from "react";

const PodcastList = ({ podcasts }) => {
  return (
    <div className="podcast_list_container">
      <h2 className="podcast_list_container_header">Available Podcasts</h2>
      <div className="podcast_list_container_list">
        <ul>
          {podcasts.map((podcast, index) => {
            return <li key={index}>{podcast.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PodcastList;
