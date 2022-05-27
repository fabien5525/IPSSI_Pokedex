//import "./Nav.scss";
import Link from "next/link";
import styled from "styled-components";

const CustomNav = styled.nav`
  nav {
    background-color: #282c34;
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    border-bottom: "solid 1px";
    padding-bottom: "1rem";
    height: "100px";

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
