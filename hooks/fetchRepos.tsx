import { useState } from "react";

import { extract } from "../libs/extract";

const useFetchRepos = (repoName: string) => {
  // HTTP request status
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = async (
    newPage: number,
    type: string,
    sort: string,
    direction: string
  ) => {
    setIsLoading(true);
    setError(null);
    // newPage => the page number to extract.
    // type, sort, direction => query params to filter data.
    const url = `https://api.github.com/orgs/${repoName}/repos?per_page=3&page=${newPage}&type=${type}&sort=${sort}&direction=${direction}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError("Failed to connect to Github.");
      }
      const data = await response.json();
      const newRepos = extract(data);
      setIsLoading(false);
      return newRepos;
    } catch (err) {
      setError("Something went wrong.");
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetchRepos;
