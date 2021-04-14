/*************************************************************************************************************
 File:         Request.js
 Author:       Christopher Perault
 Project:      podcast-searcher
 Date:         April 10th, 2021
 Description:  Helper function that sends a GET request to the NodeJS backend.
 *************************************************************************************************************/

import axios from "axios";

const GetPodcasts = async (searchKeyword) => {
  const url = process.env.REACT_APP_PODCAST_API_URL;
  if (searchKeyword !== "") {
    let res = await axios.get(url + `/${encodeURIComponent(searchKeyword)}`);
    return res.data.podcasts.body.results;
  }
};

const GetEpisodes = async (podcastID) => {
  const url = process.env.REACT_APP_EPISODE_API_URL;
  if (podcastID !== "") {
    let res = await axios.get(url + `/${encodeURIComponent(podcastID)}`);
    return res.data.episodes.body.episodes;
  }
};

export { GetPodcasts, GetEpisodes };
