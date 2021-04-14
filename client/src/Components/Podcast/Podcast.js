/*************************************************************************************************************
 File:         Podcast.js
 Author:       Christopher Perault
 Project:      podcast-searcher
 Date:         April 10th, 2021
 Description:  Child component that will represent and render a single podcast with its details and a button
               to expand a modal in which available episodes for the podcast are listed and playable.
 *************************************************************************************************************/

import React, { useState } from "react";
import { GetEpisodes } from "../../Models/Request.js";
import Button from "@material-ui/core/Button";
import EpisodeModal from "./EpisodeModal.js";

const Podcast = ({ podcasts }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPodcast, setSelectedPodcast] = useState("");
  const [episodes, setEpisodes] = useState([]);

  const handleModal = (podcastTitle, podcastID) => {
    console.log(podcastID);
    setSelectedPodcast(podcastTitle);
    handleEpisodeFetch(podcastID);
    setOpenModal(!openModal);
  };

  const handleEpisodeFetch = async (podcastID) => {
    let availableEpisodes = [];
    try {
      availableEpisodes = await GetEpisodes(podcastID);
    } catch (e) {
      console.error(e);
    } finally {
      if (availableEpisodes.length > 0) {
        setEpisodes(availableEpisodes);
      }
    }
  };

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
              <Button
                variant="contained"
                size="small"
                color="default"
                label="Episodes"
                onClick={() => handleModal(podcast.title_original, podcast.id)}
              >
                Episodes ({podcast.total_episodes})
              </Button>
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
      <EpisodeModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedPodcast={selectedPodcast}
        episodes={episodes}
      />
    </div>
  );
};

export default Podcast;
