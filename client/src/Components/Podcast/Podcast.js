/*************************************************************************************************************
 File:         Podcast.js
 Author:       Christopher Perault
 Project:      podcast-player
 Date:         April 10th, 2021
 Description:  Child component that will represent and render a single podcast result in the form of a card.
 *************************************************************************************************************/

import React from "react";
import { GetEpisodes } from "/Users/cricri/Projects/Personal/podcast-player/client/src/Models/Request.js";

const Podcast = ({ podcasts }) => {
  //TODO: finish this
  const handleEpisodeFetch = (podcastID) => {};

  return (
    <div className="podcast_outer_container">
      {podcasts.map((podcast, index) => {
        return (
          <div key={index} className="podcast_inner_container">
            <div className="podcast_inner_container_image">
              <img src={podcast.image} height="300" width="350" alt="" />
            </div>
            <div className="podcast_inner_container_details">
              <h4>{podcast.title_original}</h4>
              <h5>{podcast.publisher_original}</h5>
              <h5>Episodes ({podcast.total_episodes})</h5>
              {podcast.explicit_content && <h5>Warning: NSFW</h5>}
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
