import type { NextPage } from "next";
import { FetchList } from "containers";

const Home: NextPage = () => {
  
  return <>
    <h1>POKEDEX</h1>
    <FetchList/>
  </>;
};

export default Home;

