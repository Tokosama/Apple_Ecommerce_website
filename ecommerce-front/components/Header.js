import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import {
  Box,
  ChartBarStacked,
  CircleUser,
  House,
  ShoppingCart,
} from "lucide-react";
//import LogoIcon from "./icons/logo.svg";
const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
  img {
    width: 80%; /* ajuste ici la largeur */
    height: auto; /* conserve les proportions */
  }
`;
const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center; /* aligne verticalement */
  gap: 8px; /* espace entre icône et texte */

  color: #aaa;
  text-decoration: none;
  padding: 10px 0;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  @media screen and (min-width: 816px) {
    padding: 0;
  }

  &:hover {
    color: #fff;
  }
`;

const StyleNav = styled.nav`
  ${(props) => (props.mobileNavActive ? `display: block;` : `display:none;`)}

  gap:15px;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0px;
  right: 0;
  padding: 70px 20px 20px;

  background-color: #222;
  @media screen and (min-width: 816px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: 816px) {
    display: none;
  }

  /* Styles quand le menu est actif */
  ${({ active }) =>
    active &&
    `
    background-color: #444;  /* fond quand actif */
    border-radius: 8px;      /* coins arrondis */
    transform: rotate(90deg); /* rotation de l'icône */
  `}

  &:hover {
    background-color: #555;
    border-radius: 8px;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease-in-out;
  }
`;
export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <img
              src="/icons/logo.svg"
              alt="cart icon"
            />
          </Logo>
          <StyleNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>
              <House />
              Home
            </NavLink>
            <NavLink href={"/products"}>
              <Box />
              All products
            </NavLink>
            {/* <NavLink href={"/categories"}>
              <ChartBarStacked />
              Categories
            </NavLink>
            <NavLink href={"/account"}>
              <CircleUser />
              Account
            </NavLink> */}
            <NavLink href={"/cart"}>
              <ShoppingCart />
              Cart ({cartProducts.length})
            </NavLink>
          </StyleNav>
          <NavButton
            active={mobileNavActive}
            onClick={() => setMobileNavActive((prev) => !prev)}
          >
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
