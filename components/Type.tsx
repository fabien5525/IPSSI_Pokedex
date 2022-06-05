import { FirstLetterUpperCase } from "components";
import { ReactNode } from "react";
import styled from "styled-components";

interface props {
  name: string;
  children?: ReactNode;
}

const base = `
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    -khtml-border-radius: 20px;
    -icab-border-radius: 20px;
    -o-border-radius: 20px;
    color: white;
    width: auto;
    padding-left: 1rem;
    padding-right: 1rem;

`;

const Normal = styled.span`
  ${base}
  background: #a8a878;
  border: 1px solid #6d6d4e;
`;

const Fighting = styled.span`
  ${base}
  background: #c03028;
  border: 1px solid #7d1f1a;
`;

const Flying = styled.span`
  ${base}
  background: #a890f0;
  border: 1px solid #6d5e9c;
`;

const Poison = styled.span`
  ${base}
  background: #a040a0;
  border: 1px solid #682a68;
`;

const Ground = styled.span`
  ${base}
  background: #e0c068;
  border: 1px solid #927d44;
`;

const Rock = styled.span`
  ${base}
  background: #b8a038;
  border: 1px solid #786824;
`;

const Bug = styled.span`
  ${base}
  background: #a8b820;
  border: 1px solid #6d7815;
`;

const Ghost = styled.span`
  ${base}
  background: #705898;
  border: 1px solid #493963;
`;

const Steel = styled.span`
  ${base}
  background: #b8b8d0;
  border: 1px solid #787887;
`;

const Fire = styled.span`
  ${base}
  background: #f08030;
  border: 1px solid #9c531f;
`;

const Water = styled.span`
  ${base}
  background: #6890f0;
  border: 1px solid #445e9c;
`;

const Grass = styled.span`
  ${base}
  background: #78c850;
  border: 1px solid #4e8234;
`;

const Electric = styled.span`
  ${base}
  background: #f8d030;
  border: 1px solid #e4a61f;
`;

const Psychic = styled.span`
  ${base}
  background: #f85888;
  border: 1px solid #e43a5f;
`;

const Ice = styled.span`
  ${base}
  background: #98d8d8;
  border: 1px solid #5fa7a7;
`;

const Dragon = styled.span`
  ${base}
  background: #7038f8;
  border: 1px solid #4924b2;
`;

const Dark = styled.span`
  ${base}
  background: #705848;
  border: 1px solid #493931;
`;

const Undifined = styled.span`
  ${base}
  background:#68A090;
  border: 1px solid #44685e;
`;

const Type = ({ name }: props) => {
  if (name.toLowerCase() === "normal") return <Normal>{FirstLetterUpperCase(name)}</Normal>;
  if (name.toLowerCase() === "fighting") return <Fighting>{FirstLetterUpperCase(name)}</Fighting>;
  if (name.toLowerCase() === "flying") return <Flying>{FirstLetterUpperCase(name)}</Flying>;
  if (name.toLowerCase() === "poison") return <Poison>{FirstLetterUpperCase(name)}</Poison>;
  if (name.toLowerCase() === "ground") return <Ground>{FirstLetterUpperCase(name)}</Ground>;
  if (name.toLowerCase() === "rock") return <Rock>{FirstLetterUpperCase(name)}</Rock>;
  if (name.toLowerCase() === "bug") return <Bug>{FirstLetterUpperCase(name)}</Bug>;
  if (name.toLowerCase() === "ghost") return <Ghost>{FirstLetterUpperCase(name)}</Ghost>;
  if (name.toLowerCase() === "steel") return <Steel>{FirstLetterUpperCase(name)}</Steel>;
  if (name.toLowerCase() === "fire") return <Fire>{FirstLetterUpperCase(name)}</Fire>;
  if (name.toLowerCase() === "water") return <Water>{FirstLetterUpperCase(name)}</Water>;
  if (name.toLowerCase() === "grass") return <Grass>{FirstLetterUpperCase(name)}</Grass>;
  if (name.toLowerCase() === "electric") return <Electric>{FirstLetterUpperCase(name)}</Electric>;
  if (name.toLowerCase() === "psychic") return <Psychic>{FirstLetterUpperCase(name)}</Psychic>;
  if (name.toLowerCase() === "ice") return <Ice>{FirstLetterUpperCase(name)}</Ice>;
  if (name.toLowerCase() === "dragon") return <Dragon>{FirstLetterUpperCase(name)}</Dragon>;
  if (name.toLowerCase() === "dark") return <Dark>{FirstLetterUpperCase(name)}</Dark>;

  return <Undifined>???</Undifined>;
};

export default Type;
