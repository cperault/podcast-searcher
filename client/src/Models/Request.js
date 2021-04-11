/*************************************************************************************************************
 File:         Request.js
 Author:       Christopher Perault
 Project:      podcast-player
 Date:         April 10th, 2021
 Description:  Helper function that sends a GET request to the NodeJS backend.
 *************************************************************************************************************/

import axios from "axios";

const GetPodcasts = async (searchKeyword) => {
  const url = "http://localhost:3080/podcast/list";
  if (searchKeyword.trim() !== "") {
    let res = await axios.get(url + `/${encodeURIComponent(searchKeyword)}`);
    return res.data.feed.body.results;
  }
};

export default GetPodcasts;
