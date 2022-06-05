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

export function AppProvider({ children }: Props) {
  const router = useRouter();
  const [pokemonFilter, setPokemonFilter] = useState<string>("");
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [pokemonsFavorite, setPokemonsFavorite] = useState<any[]>([]);

  if (typeof window !== "undefined" && pokemonsFavorite.length === 0) {
    //favorites
    const favorites = localStorage.getItem("pokemonsFavorite") ?? "";
    console.warn("MOUNT", JSON.parse(favorites));
    if (favorites != "") {
      console.log("fav founds : loading favorites", JSON.parse(favorites))
      setPokemonsFavorite(JSON.parse(favorites));
    }

    //filter from url
    if (window.location.search !== "") {
      const search = window.location.search.split("=")[1];
      setPokemonFilter(search);
    }
  }

  useEffect(() => {
    if (window && window.location.pathname === "/") {
      if (router.query != undefined) {
        const { pathname } = router;
        //console.log("test APP CONTEXT", router.query.search);
        if (pokemonFilter === "") {
          router.push(pathname);
        } else {
          router.push({
            pathname,
            query: { search: pokemonFilter },
          });
        }
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
