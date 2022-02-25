import { createSlice } from "@reduxjs/toolkit";

import Repo from "../models/repo";

// state includes repo data and current page number.
type repoStateObj = {
  repos: Repo[];
  currentPage: number;
  isEnd: boolean;
};

const initialReposState: repoStateObj = {
  repos: [],
  currentPage: 0,
  isEnd: false,
};

const ReposSlice = createSlice({
  name: "repositories",
  initialState: initialReposState,
  reducers: {
    // concatenate new repos behind current repos.
    addRepos(state, action) {
      if (action.payload.length < 3) {
        state.isEnd = true;
      }
      state.repos = [...state.repos, ...action.payload];
      state.currentPage++;
    },
    // set the entire repos to new repos when query params was changed.
    // reset page number.
    setRepos(state, action) {
      state.repos = action.payload;
      state.currentPage = 1;
      state.isEnd = false;
    },
  },
});

export const reposActions = ReposSlice.actions;

export default ReposSlice.reducer;
