import { createContext, ReactNode, useContext, useState } from "react";

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
  const [pokemonFilter, setPokemonFilter] = useState<string>("");
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [pokemonsFavorite, setPokemonsFavorite] = useState<any[]>([]);

  if (typeof window !== "undefined" && pokemonsFavorite.length === 0) {
    const favorites = localStorage.getItem("pokemonsFavorite") ?? "";
    console.warn("MOUNT", JSON.parse(favorites));
    if (favorites != "") setPokemonsFavorite(JSON.parse(favorites));
    setPokemonsFavorite([...pokemonsFavorite, "define"]);
  }
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
