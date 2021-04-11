/*************************************************************************************************************
 File:         Podcast.js
 Author:       Christopher Perault
 Project:      podcast-player
 Date:         April 10th, 2021
 Description:  Child component that will represent and render a single podcast result in the form of a card.
 *************************************************************************************************************/

import React from "react";

const Podcast = ({ podcasts }) => {
  return (
    <div className="podcast_outer_container">
      {podcasts.map((podcast, index) => {
        return (
          <div key={index} className="podcast_inner_container">
            <div className="podcast_inner_container_image">
              <img src={podcast.image} height="200" width="250" alt="" />
            </div>
            <div className="podcast_inner_container_details">
              <h2>{podcast.title_original}</h2>
              <h4>{podcast.podcast.publisher_original}</h4>
              <p>
                {podcast.description_original
                  ? podcast.description_original
                  : "No description for this podcast was provided."}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Podcast;
