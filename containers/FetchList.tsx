import axios from "axios";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import { Loader } from "components/atoms";

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

  return <>{JSON.stringify(data.data.results)}</>;
  /* 
  return (
    <ul>
      {data.results.map((pokemon: string | undefined, index: Number) => (
        <li key={`pokelist_${index}`}>{pokemon}</li>
      ))}
    </ul>
  ); */
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
