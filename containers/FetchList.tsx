import axios from "axios";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import { Loader, PokemonItem } from "components";
import { useApp } from "contexts/AppContext";

const Fetch = () => {
  const { setPokemons } = useApp();

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

  setPokemons(data.data.results);

  return <></>;
};

const List = () => {
  const { pokemonFilter, setPokemonFilter, pokemons } = useApp();

  const dataFiltered = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonFilter.toLowerCase())
  );

  const handleChange = (e: any) => {
    setPokemonFilter(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={pokemonFilter} />
      <ul>
        {dataFiltered.map((pokemon: any | undefined, index: Number) => (
          <PokemonItem key={`pokelist_${index}`} index={index} {...pokemon} />
        ))}
      </ul>
    </>
  );
};

const FetchList = () => {
  const { pokemons } = useApp();

  console.warn(pokemons);

  if (pokemons.length === 0) {
    const queryClient = new QueryClient();
    return (
      <QueryClientProvider client={queryClient}>
        <Fetch />
      </QueryClientProvider>
    );
  } else {
    return <List />;
  }
};

export default FetchList;
