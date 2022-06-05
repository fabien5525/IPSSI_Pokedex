import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

interface PokemonItemProps {
  name: string;
  id: number;
}

const StyledLi = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 1rem;
  border-bottom: solid 1px;
  background-color: #474f5e;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  width: auto;
  margin-right: 40px;

  a {
    display: flex;
    text-decoration: none;
    color: white;
    align-items: center;
    text-align: center;
  }
  
  a:hover {
    text-decoration: underline;
  }

  img {
    height: 128px !important;
    margin-right: 1rem;
  }
`;

const PokemonItem = ({ name = "", id = 0 }: PokemonItemProps) => {
  return (
    <StyledLi>
      <Link href={`/pokemon/${name}`}>
        <a>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${id}.png`}
            alt={`${name}_front_image`}
            width="320px"
            height="320px"
            loading="lazy"

          />
          <span>{name}</span>
        </a>
      </Link>
    </StyledLi>
  );
};

export default PokemonItem;
