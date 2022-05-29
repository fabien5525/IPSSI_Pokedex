import Link from "next/link";

interface PokemonItemProps {
  name: string;
}

const PokemonItem = ({ name }: PokemonItemProps) => {
  return (
    <li>
      <Link href={`/pokemon/${name}`}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

export default PokemonItem;
