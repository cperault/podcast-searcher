/*************************************************************************************************************
 File:         Search.js
 Author:       Christopher Perault
 Project:      podcast-player
 Date:         April 10th, 2021
 Description:  Child component that will let the user search for podcasts.
 *************************************************************************************************************/

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import GetPodcasts from "/Users/cricri/Projects/Personal/podcast-player/client/src/Models/Request.js";

const Search = ({ setSearchData, setWrapperHeader }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchKeywordError, setSearchKeywordError] = useState("");

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    let results = [];
    if (searchKeyword.trim() !== "") {
      try {
        results = await GetPodcasts(searchKeyword);
      } catch (e) {
        setSearchKeywordError(e);
      } finally {
        setWrapperHeader(searchKeyword);
        setSearchData(results);
      }
    } else {
      setSearchKeywordError("Please enter a keyword.");
    }
  };

  const onBlurHandler = (text) => {
    handleSubmit();
  };

  return (
    <div className="search_container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          error={searchKeywordError.trim() !== "" ? true : false}
          label={
            searchKeyword.trim() !== ""
              ? ""
              : "Enter a keyword to get started..."
          }
          helperText={searchKeywordError}
          variant="outlined"
          fullWidth
          autoFocus
          onBlur={(text) => onBlurHandler(text.target.value)}
          onChange={(text) => setSearchKeyword(text.target.value.trim())}
        />
      </form>
    </div>
  );
};

export default Search;
