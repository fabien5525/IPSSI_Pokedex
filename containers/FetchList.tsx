import axios from "axios";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import { Loader, PokemonItem, trouverId } from "components";
import { useApp } from "contexts/AppContext";
import styled from "styled-components";

const FetchListOfPokemons = () => {
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

  //Mon StyledInput ne fonctionne pas bien comparé au fonctionnement normal de l'input,
  //je n'ai donc pas pu l'utilisé et préferé déclaré mon style directement dans l'input
  // const StyledInput = styled.input`
  //   padding: 0.5rem;
  //   border: 1px solid #ccc;
  //   border-radius: 4px;
  //   box-sizing: border-box;
  //   margin-left: 1rem;
  //   margin-top: 1rem;
  //   margin-right: 1rem;
  // `;

  return (
    <>
      <input type="text" onChange={handleChange} value={pokemonFilter} placeholder="Search your pokemon here" style={{
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        marginLeft: "1rem",
        marginTop: "1rem",
        marginRight: "1rem",
      }}/>
      <ul>
        {dataFiltered.map((pokemon: any | undefined, index : number) => (
          <PokemonItem key={`pokelist_${index}`} id={trouverId(pokemon.url)} name={pokemon.name} {...pokemon} />
        ))}
      </ul>
    </>
  );
};

const FetchList = () => {
  const { pokemons } = useApp();

  //console.warn(pokemons);

  if (pokemons.length === 0) {
    const queryClient = new QueryClient();
    return (
      <QueryClientProvider client={queryClient}>
        <FetchListOfPokemons />
      </QueryClientProvider>
    );
  } else {
    return <List />;
  }
};

export default FetchList;
