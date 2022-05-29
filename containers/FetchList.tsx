import axios from "axios";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import { Loader } from "components/atoms";
import { PokemonItem } from "components/atoms";
import styled from "styled-components";

const List = () => {
  const {
    isLoading,
    isError,
    data,
    error,
  }: {
    isLoading: boolean;
    isError: boolean;
    data: any;
    error: any;
  } = useQuery("queryClient", () =>
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(data.data.results);

  return (
    <ul className="carousel">
      {data.data.results.map((pokemon: any | undefined, index: Number) => (
        <PokemonItem key={`pokelist_${index}`} {...pokemon} />
      ))}
    </ul>
  );
};

const FetchList = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>
  );
};

export default FetchList;
