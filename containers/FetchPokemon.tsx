import axios from "axios";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import { Loader, Type, StyledTypes, FirstLetterUpperCase } from "components";
import Image from "next/image";
import styled from "styled-components";
import { useApp } from "contexts/AppContext";
import { useEffect } from "react";

interface props {
  pokemon: string;
}

const Pokemon = ({ pokemon }: props) => {
  const { pokemonsFavorite, setPokemonsFavorite } = useApp();

  useEffect(() => {
    //console.warn("UPDATE", pokemonsFavorite)
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

  const active = pokemonsFavorite.includes(pokemon);

  const HandleCLickFavUnFav = () => {
    // console.log(
    //   "TEST",
    //   pokemonsFavorite.includes(pokemon),
    //   pokemonsFavorite,
    //   pokemonsFavorite.filter((pk: string) => pk !== pokemon)
    // );
    if (pokemonsFavorite.includes(pokemon)) {
      //ne marche pas si le filtre renvoi un tableau vide ???????????????????
      setPokemonsFavorite(
        pokemonsFavorite.filter((pk: string) => pk !== pokemon)
      );
    } else {
      setPokemonsFavorite([...pokemonsFavorite, pokemon]);
    }

    // pokemonsFavorite.includes(pokemon)
    //   ? setPokemonsFavorite(
    //       pokemonsFavorite.filter((pokemon) => pokemon !== pokemon)
    //     )
    //   : setPokemonsFavorite([...pokemonsFavorite, pokemon]);
  };

  const HeartCSS = styled.i`
    & {
      background-color: gray;
      display: inline-block;
      height: 30px;
      margin: 0 10px;
      position: relative;
      top: 0;
      transform: rotate(-45deg);
      width: 30px;
      cursor: pointer;
    }

    &:before,
    &:after {
      content: "";
      background-color: gray;
      border-radius: 50%;
      height: 30px;
      position: absolute;
      width: 30px;
    }

    &:before {
      top: -15px;
      left: 0;
    }

    &:after {
      left: 15px;
      top: 0;
    }
  `;

  const HeartCSSFav = styled.i`
    & {
      background-color: red;
      display: inline-block;
      height: 30px;
      margin: 0 10px;
      position: relative;
      top: 0;
      transform: rotate(-45deg);
      width: 30px;
      cursor: pointer;
    }

    &:before,
    &:after {
      content: "";
      background-color: red;
      border-radius: 50%;
      height: 30px;
      position: absolute;
      width: 30px;
    }

    &:before {
      top: -15px;
      left: 0;
    }

    &:after {
      left: 15px;
      top: 0;
    }
  `;

  const StyledImage = styled(Image)`
    min-width: 0 !important;
    min-height: 0 !important;
    width: auto !important;
    height: 50vh !important;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      margin-top: 1rem;
    }

    i {
      margin-top: 2rem;
    }
  `;

  return (
    <>
      <StyledImage
        src={
          data.data.sprites.versions["generation-i"]["red-blue"]
            .front_transparent
        }
        alt={`${pokemon}_front_image`}
        width="320px"
        height="320px"
        loading="eager"
      />

      <Container>
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
          <HeartCSSFav
            onClick={() => {
              HandleCLickFavUnFav();
            }}
          />
        ) : (
          <HeartCSS
            onClick={() => {
              HandleCLickFavUnFav();
            }}
          />
        )}
      </Container>
    </>
  );
};

//https://github.com/facebook/react/issues/18178#issuecomment-595846312
const FetchPokemon = (props: props) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Pokemon {...props} />
    </QueryClientProvider>
  );
};

export default FetchPokemon;
