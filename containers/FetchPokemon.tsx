import axios from "axios";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import { Loader } from "components/atoms";
import Image from "next/image";

interface props {
  pokemon: string;
}

const Pokemon = ({ pokemon }: props) => {
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
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(data);

  return (
    <>
      <h2>{pokemon}</h2>
      <div>
        <span>List of Moves</span>
        <ul>
          {data.data.moves.map((move: any | undefined, index: Number) => {
            if (index >= 3) return;
            return <li key={`move_${index}`}>{move.move.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

const FetchPokemon = (props: props) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Pokemon {...props} />
    </QueryClientProvider>
  );
};

export default FetchPokemon;
