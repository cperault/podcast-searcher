/*************************************************************************************************************
 File:         Search.js
 Author:       Christopher Perault
 Project:      podcast-searcher
 Date:         April 10th, 2021
 Description:  Child component that will let the user search for podcasts.
 *************************************************************************************************************/

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { GetPodcasts } from "../../Models/Request.js";
import { makeStyles } from "@material-ui/core/styles";

const Search = ({ setSearchData, setWrapperHeader }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchKeywordError, setSearchKeywordError] = useState("");

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    let results = [];
    if (searchKeyword !== "") {
      try {
        results = await GetPodcasts(searchKeyword);
      } catch (e) {
        setSearchKeywordError(e);
      } finally {
        if (results.length > 0) {
          setWrapperHeader(searchKeyword);
          setSearchData(results);
        } else {
          setSearchKeywordError("No podcasts found...:(");
        }
      }
    } else {
      setSearchKeywordError("Please enter a keyword.");
    }
  };

  const onBlurHandler = () => {
    handleSubmit();
  };

  const StyledTextField = makeStyles({
    root: {
      "& label.Mui-focused": {
        color: "black",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "black",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "black",
        },
        "&:hover fieldset": {
          borderColor: "black",
        },
        "&.Mui-focused fieldset": {
          borderColor: "black",
        },
      },
    },
    input: {
      color: "black",
    },
  });

  const classes = StyledTextField();

  return (
    <div className="search_container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
          error={searchKeywordError !== "" ? true : false}
          helperText={searchKeywordError}
          variant="outlined"
          fullWidth
          autoFocus
          onBlur={() => onBlurHandler()}
          onChange={(text) => setSearchKeyword(text.target.value.trim())}
        />
      </form>
    </div>
  );
};

export default Search;
