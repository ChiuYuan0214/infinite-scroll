import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// react-redux store.
import { RootState, AppDispatch } from "../store";
import { reposActions } from "../store/repos";

// class of Repo.
import Repo from "../models/repo";

// components.
import Filter from "../components/Filter/Filter";
import CardList from "../components/CardList/CardList";
import LoadingAnimation from "../components/UI/LoadingAnimation/LoadingAnimation";

// helper function, for extracting data of response from github api.
import { extract } from "../libs/extract";

// custom hook, for handling http request.
import useFetchRepos from "../hooks/fetchRepos";

import styles from "../styles/Home.module.css";

// change the orgs name here.
const REPO_NAME = "ChiuYuan-First-Organization";

// to prevent filter checking on first rendering.
let isInitial = true;

const Home: NextPage<{ repos: Repo[] }> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentPage, repos, isEnd } = useSelector((state: RootState) => state.repos);
  const { isLoading, error, sendRequest } = useFetchRepos(REPO_NAME);

  // ref for scroll event.
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  // to get user input as query values.
  const [type, setType] = useState<string>("all");
  const [sort, setSort] = useState<string>("created");
  const [direction, setDirection] = useState<string>("desc");

  // dispatch props to redux when building process, as default value.
  useEffect(() => {
    dispatch(reposActions.addRepos(props.repos));
  }, []);

  // reset 'repos' in store when filter options have changed.
  useEffect(() => {
    // avoid re-rendering at first round.
    if (isInitial) {
      isInitial = false;
      return;
    }
    // fix the page number to 1 when resetting.
    sendRequest(1, type, sort, direction).then((data) => {
      let newRepos = [];
      if (data && data.length > 0) {
        newRepos = JSON.parse(JSON.stringify(data));
      }
      // set the entire repos to newly received repos.
      dispatch(reposActions.setRepos(newRepos));
    });
  }, [type, sort, direction, sendRequest]);

  // function triggered by scroll event listener.
  const scrollHandler = () => {
    // measure the distance from container's top to the bottom of inner.
    const distanceToBottom = innerRef.current!.getBoundingClientRect().bottom;
    // to check if the distance is smaller than containerHeight + 100.
    const isClosingBottom =
      distanceToBottom < containerRef.current!.offsetHeight + 100;
    // only fetch new data when not loading, not end of data and closing to bottom of the page.
    if (!isLoading && !isEnd && isClosingBottom) {
      // assign the page number as current page number + 1.
      const newPage = currentPage + 1;
      sendRequest(newPage, type, sort, direction).then((data) => {
        if (data && data.length > 0) {
          const newRepos = JSON.parse(JSON.stringify(data));
          dispatch(reposActions.addRepos(newRepos));
        } else {
          // this block triggered when length of data is not greater than 0.
          // equal to 'no more valid data'.
          // set isEnd to true to stop triggering this function when scroll.
        }
      });
    }
  };

  // default page content.
  let content = <p className={styles.defaultText}>No Repos.</p>;

  // when error occured.
  if (error) {
    content = <p className={styles.error}>{error}</p>;
  }

  // when repos is not empty and no error exist.
  if (repos.length > 0) {
    content = <CardList list={repos} />;
  }

  return (
    <>
      <Head>
        <title>ChiuYuan's repos</title>
        <meta name="description" content="Adam Chiu's repositories." />
      </Head>
      <div
        ref={containerRef}
        onScroll={scrollHandler}
        className={styles.container}
      >
        <div ref={innerRef} className={styles.inner}>
          <Filter
            setType={setType}
            setSort={setSort}
            setDirection={setDirection}
            type={type}
            sort={sort}
            direction={direction}
          />
          {content}
          {isLoading && <LoadingAnimation />}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.github.com/orgs/${REPO_NAME}/repos?per_page=3&page=1&type=all&sort=created&direction=desc`
  );
  if (!response.ok) {
    console.log("failed to fetch static props");
  }
  let dataList = await response.json();
  dataList = dataList.length > 0 ? dataList : [];
  const repos: Repo[] = extract(dataList);

  return {
    props: {
      repos: JSON.parse(JSON.stringify(repos)),
    },
    revalidate: 1,
  };
};

export default Home;
