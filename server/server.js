const express = require("express");
const cors = require("cors");
const app = express();
const port = 3080;
const unirest = require("unirest");
const dotenv = require("dotenv");
dotenv.config();
const apiKey = process.env.API_KEY;
app.use(cors());

const apiURL = ["https://listen-api-test.listennotes.com/api/v2"];

app.get("/podcast/list/:keyword", async (request, response, next) => {
  let searchKeyword = encodeURIComponent(request.params.keyword);
  const searchURL = `https://listen-api.listennotes.com/api/v2/search?q=${searchKeyword}&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`;
  const results = await unirest
    .get(searchURL)
    .header("X-ListenAPI-Key", process.env.API_KEY);
  response.json({ message: `You searched: ${searchURL}`, feed: results });
});

app.get("/podcast/", (request, response) => {
  response.send("Backend hit at /podcast/");
});

app.get("/", (request, response) => {
  response.send("Backend hit at /");
});
app.listen(port, () => {
  console.clear();
  console.log(`Backend server is running on port::${port}`);
});
