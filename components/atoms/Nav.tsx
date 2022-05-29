//import "./Nav.scss";
import Link from "next/link";
import styled from "styled-components";

const CustomNav = styled.nav`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  & {
    height: 6vh;
    background-color: #282c34;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    border-bottom: "solid 1px";
    padding-bottom: "1rem";

    a {
      margin-left: 5vh;
      text-decoration: none;
      color: white;
    }
  }
`;

const Nav = () => {
  return (
    <CustomNav>
      <Link href="/">
        <a>Home</a>
      </Link>
    </CustomNav>
  );
};

export default Nav;
