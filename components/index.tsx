import Nav from "components/Nav";
import Loader from "components/Loader";
import PokemonItem from "components/PokemonItem";
import Type from "components/Type";
import StyledTypes from "components/StyledTypes";

const FirstLetterUpperCase = (str: string) => {
  if (str.length === 0) return str;
  str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const trouverId = (url: string): number => {
  const id = url.split("/")[url.split("/").length - 2];
  return parseInt(id);
};

export { Nav, Loader, PokemonItem, Type, StyledTypes, FirstLetterUpperCase, trouverId };
