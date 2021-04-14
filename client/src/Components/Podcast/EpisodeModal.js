/*************************************************************************************************************
 File:         EpisodeModal.js
 Author:       Christopher Perault
 Project:      podcast-searcher
 Date:         April 13th, 2021
 Description:  Modal component that will show all available episodes of the selected podcast, as well as the
               ability to play them.
 *************************************************************************************************************/

import React, { useState } from "react";
import {
  Button,
  Modal,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core/";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

const EpisodeModal = ({
  openModal,
  setOpenModal,
  selectedPodcast,
  episodes,
}) => {
  const [isPlaying, setIsPlaying] = useState([]);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  //takes seconds and returns as `hh:mm:ss`
  const convertSecondsToTime = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  };

  const handleListItemClick = (episodeLink) => {
    const confirmation = window.confirm(
      "This will open a new tab and take you to the podcast author's website. Do you wish to proceed?"
    );
    if (confirmation === true) {
      window.open(episodeLink, "_blank");
    }
  };

  const togglePodcastEpisode = (podcastID, audioID) => {
    let currentAudio = document.getElementById(audioID);

    if (currentAudio.paused) {
      //add podcastID to array of playing podcasts
      setIsPlaying([...isPlaying, podcastID]);
      currentAudio.play();
    } else {
      //remove podcastID from array of playing podcasts
      setIsPlaying(isPlaying.filter((playing) => playing !== podcastID));
      currentAudio.pause();
    }
  };

  return (
    <Modal labelledby="modal_title" open={openModal}>
      <div role="dialog" id="episode-modal" aria-modal="true">
        <div className="episode_modal">
          <h3 id="modal_title">
            Available Episodes for{" "}
            <span style={{ fontStyle: "italic" }}>{selectedPodcast}</span>
          </h3>
          <div className="episode_modal_inner_container">
            <List dense>
              {episodes.map((episode, index) => {
                return (
                  <ListItem
                    key={index}
                    button
                    onClick={() => handleListItemClick(episode.link)}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <img
                          src={episode.thumbnail}
                          alt="Thumbnail for episode"
                          height="45"
                          width="80"
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={episode.title}
                      secondary={convertSecondsToTime(episode.audio_length_sec)}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="play podcast"
                        onClick={() =>
                          togglePodcastEpisode(
                            episode.id,
                            `podcastAudio-${index}`
                          )
                        }
                      >
                        <audio
                          id={`podcastAudio-${index}`}
                          src={episode.audio}
                        ></audio>
                        {isPlaying.includes(episode.id) ? (
                          <PauseCircleOutlineIcon />
                        ) : (
                          <PlayCircleOutlineIcon />
                        )}
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
            <Button
              className="modal-container-close"
              variant="contained"
              size="small"
              style={{
                marginTop: "20px",
                float: "right",
                backgroundColor: "#7868e6",
                color: "white",
              }}
              onClick={handleModal}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EpisodeModal;
