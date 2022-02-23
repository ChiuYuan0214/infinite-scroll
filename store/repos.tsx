import { createSlice } from "@reduxjs/toolkit";

import Repo from "../models/repo";

// state includes repo data and current page number.
type repoStateObj = {
  repos: Repo[];
  currentPage: number;
};

const initialReposState: repoStateObj = {
  repos: [],
  currentPage: 0,
};

const ReposSlice = createSlice({
  name: "repositories",
  initialState: initialReposState,
  reducers: {
    // concatenate new repos behind current repos.
    addRepos(state, action) {
      state.repos = [...state.repos, ...action.payload];
      state.currentPage++;
    },
    // set the entire repos to new repos.
    setRepos(state, action) {
      state.repos = action.payload;
      state.currentPage = 1;
    }
  },
});

export const reposActions = ReposSlice.actions;

export default ReposSlice.reducer;
