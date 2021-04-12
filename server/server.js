const express = require("express");
const cors = require("cors");
const app = express();
const unirest = require("unirest");
const dotenv = require("dotenv");
dotenv.config();

const apiKey = process.env.API_KEY;
const port = process.env.LISTENING_PORT;

app.use(cors());

const callAPI = async (apiURL) => {
  return await unirest
    .get(apiURL)
    .header("X-ListenAPI-Key", process.env.API_KEY);
};

const getPodcasts = async (searchKeyword) => {
  let apiURL = `https://listen-api.listennotes.com/api/v2/search?q=${searchKeyword}&sort_by_date=0&type=podcast&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`;

  return await callAPI(apiURL);
};

const getEpisodes = async (podcastID) => {
  let apiURL = `https://listen-api.listennotes.com/api/v2/podcasts/${podcastID}?next_episode_pub_date=1479154463000&sort=recent_first`;

  return await callAPI(apiURL);
};

app.get("/podcast/list/:keyword", async (request, response, next) => {
  let searchKeyword = encodeURIComponent(request.params.keyword);

  const podcastResults = await getPodcasts(searchKeyword);
  response.json({ podcasts: podcastResults });
});

app.get(
  "/podcast/list/episodes/:podcastID",
  async (request, response, next) => {
    let podcastID = encodeURIComponent(request.params.podcastID);

    const episodeResults = await getEpisodes(podcastID);

    response.json({ episodes: episodeResults });
  }
);

app.listen(port, () => {
  console.clear();
  console.log(`Backend server is running on port::${port}`);
});
