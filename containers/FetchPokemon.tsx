import axios from "axios";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import { Loader, Type } from "components";
import Image from "next/image";
import styled, { StyledFunction } from "styled-components";
import { useApp } from "contexts/AppContext";
import { useEffect } from "react";

interface props {
  pokemon: string;
}

const Pokemon = ({ pokemon }: props) => {
  const { pokemonsFavorite, setPokemonsFavorite } = useApp();

  useEffect(() => {
    console.warn("UPDATE", pokemonsFavorite)
    localStorage.setItem("pokemonsFavorite", JSON.stringify(pokemonsFavorite));
  }, [pokemonsFavorite]);

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

  const StyledTypes = styled.div`
    span {
      width: 64px;
      height: 24px;
      display: inline-block;
      text-align: center;
      margin-left: 4px;
    }
  `;

  const FirstLetterUpperCase = (str: string) => {
    if (str.length === 0) return str;
    str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const active = pokemonsFavorite.includes(pokemon);

  const HandleCLickFavUnFav = (ev: any) => {
    ev.preventDefault();
    active
      ? setPokemonsFavorite(
          pokemonsFavorite.filter((pokemon) => pokemon !== pokemon)
        )
      : setPokemonsFavorite([...pokemonsFavorite, pokemon]);
  };

  const Heart = styled.i`
    width: 32px;
    height: 32px;
    animation: fav;
    position: relative;
    animation-fill-mode: forwards;
    background-color: #d3aaaa;
    display: inline-block;

    @keyframes fav {
      from {
        background-color: #d3aaaa;
      }
      to {
        background-color: #ff0000;
      }
    }
  `;

  const HeartFav = styled.i`
    width: 32px;
    height: 32px;
    animation: unFav;
    position: relative;
    animation-fill-mode: forwards;
    background-color: #ff0000;
    display: inline-block;

    @keyframes unFav {
      from {
        background-color: #ff0000;
      }
      to {
        background-color: #d3aaaa;
      }
    }
  `;

  return (
    <>
      <Image
        src={
          data.data.sprites.versions["generation-i"]["red-blue"]
            .front_transparent
        }
        alt={`${pokemon}_front_image`}
        width="320px"
        height="320px"
        loading="eager"
      />
      <h2>{FirstLetterUpperCase(pokemon)}</h2>
      <div className="description">
        <span>Weight: {data.data.weight}</span>{" "}
        <span>Height: {data.data.height}</span>
      </div>
      <StyledTypes className="types">
        {data.data.types.map((type: any | undefined, index: Number) => (
          <Type key={`type_${index}`} name={type.type.name}>
            {FirstLetterUpperCase(type.type.name)}
          </Type>
        ))}
      </StyledTypes>
      <div>
        <span>List of Moves</span>
        <ul>
          {data.data.moves.map((move: any | undefined, index: Number) => {
            if (index >= 3) return;
            return (
              <li key={`move_${index}`}>
                {FirstLetterUpperCase(move.move.name)}
              </li>
            );
          })}
        </ul>
      </div>
      {active ? (
        <HeartFav onClick={HandleCLickFavUnFav} />
      ) : (
        <Heart onClick={HandleCLickFavUnFav} />
      )}
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
