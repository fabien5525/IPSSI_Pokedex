import Link from "next/link";
import { StyledTypes, Type } from "components";
import styled from "styled-components";
import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";

const types = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
];

const StyledTypes2 = styled(StyledTypes)`
  a {
    margin-left: 1rem;
    span {
      margin-top: 1rem;
    }
  }
`;

const Post = () => {
  return (
    <>
      <StyledTypes2>
        {types.map((type: string, index: Number) => (
          <Link key={`type_${index}`} href={{
            pathname: '/type/[type]',
            query: {
                type: type
            }
          }}>
            <a>
              <Type name={type} />
            </a>
          </Link>
        ))}
      </StyledTypes2>
    </>
  );
};

export default Post;
