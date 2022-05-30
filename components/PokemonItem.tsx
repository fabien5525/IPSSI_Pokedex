import Link from "next/link";
import Image from "next/image";

interface PokemonItemProps {
  name: string;
  index: number;
}

const PokemonItem = ({ name = "", index = 0 }: PokemonItemProps) => {
  return (
    <li>
      <Link href={`/pokemon/${name}`}>
        <a>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
            alt={`${name}_front_image`}
            width="32px"
            height="32px"
            loading="lazy"
          />
          <span>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default PokemonItem;
