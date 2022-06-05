//import "./Nav.scss";
import { useModal } from "contexts/Modal";
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

const ContactModal = () => {
  const { openModal } = useModal();
  return <a style={{
    cursor: "pointer"
  }} onClick={() => {openModal()}}>Contact</a>;
};

const Nav = () => {
  return (
    <CustomNav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/type">
        <a>Types</a>
      </Link>
      <ContactModal />
    </CustomNav>
  );
};

export default Nav;
