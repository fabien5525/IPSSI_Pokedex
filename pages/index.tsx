import type { NextPage } from "next";
import { FetchList } from "containers";
import { useRouter } from "next/router";
import { useApp } from "contexts/AppContext";
import { useEffect } from "react";

let init = false;

const Home: NextPage = () => {
  const { setPokemonFilter } = useApp();
  const { query } = useRouter();
  const { search } = query;
  if (init === false) {
    if (search) {
      console.log("test FETCHLIST");
      if (typeof search === "string") {
        setPokemonFilter(search);
        init = true;
      }
    }
  }

  return (
    <>
      <FetchList />
    </>
  );
};

export default Home;
