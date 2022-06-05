import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type appContextType = {
  pokemonFilter: string;
  setPokemonFilter: React.Dispatch<React.SetStateAction<string>>;
  pokemons: any[];
  setPokemons: React.Dispatch<React.SetStateAction<any[]>>;
  pokemonsFavorite: any[];
  setPokemonsFavorite: React.Dispatch<React.SetStateAction<any[]>>;
};

const appContextValues: appContextType = {
  pokemonFilter: "",
  setPokemonFilter: () => {},
  pokemons: [],
  setPokemons: () => {},
  pokemonsFavorite: [],
  setPokemonsFavorite: () => {},
};

const AppContext = createContext<appContextType>(appContextValues);

export function useApp() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

let init = false;

export function AppProvider({ children }: Props) {
  const router = useRouter();
  const [pokemonFilter, setPokemonFilter] = useState<string>("");
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [pokemonsFavorite, setPokemonsFavorite] = useState<any[]>([]);

  if (typeof window !== "undefined" && pokemonsFavorite.length === 0) {
    const favorites = localStorage.getItem("pokemonsFavorite") ?? "[]";
    //console.warn("MOUNT", JSON.parse(favorites));
    if (favorites != "") setPokemonsFavorite(JSON.parse(favorites));
    setPokemonsFavorite([...pokemonsFavorite, "define"]);
  }

  useEffect(() => {
    if (router.query.search != undefined) {
      //console.log("test APP CONTEXT", router.query.search);
      const { pathname } = router;
      if (pokemonFilter === "") {
        router.push(pathname);
      } else {
        router.push({
          pathname,
          query: { search: pokemonFilter },
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonFilter]);

  const value = {
    pokemonFilter,
    setPokemonFilter,
    pokemons,
    setPokemons,
    pokemonsFavorite,
    setPokemonsFavorite,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}

export const FirstLetterUpperCase = (str: string) => {
  if (str.length === 0) return str;
  str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
};