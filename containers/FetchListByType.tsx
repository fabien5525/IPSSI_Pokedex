import axios from "axios";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import { Loader, PokemonItem, Type, trouverId } from "components";
import styled from "styled-components";

interface props {
  type: string;
}

const Title = styled.h1`
  span {
    display: inline-block;
    text-align: center;
    margin-left: 1rem;
  }
`;

const FetchListOfPokemons = ({ type }: props) => {
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
    axios.get("https://pokeapi.co/api/v2/type/normal")
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <Title>
        <Type name={type} />
      </Title>
      <ul>
        {data.data.pokemon.map(({ pokemon }: { pokemon: any }) => {
          const id = trouverId(pokemon.url);
          if (id <= 151) {
            console.log(pokemon);
            return <PokemonItem name={pokemon.name} id={id} />;
          }
        })}
      </ul>
    </>
  );
};

const FetchListByType = ({ type = "" }: props) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <FetchListOfPokemons type={type} />
    </QueryClientProvider>
  );
};

export default FetchListByType;
